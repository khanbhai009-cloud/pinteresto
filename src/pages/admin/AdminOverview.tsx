import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getLatestPosts } from '../../lib/posts';
import { Eye, Clock, FileEdit, Plus, X, Zap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminOverview() {
  const [injectorOpen, setInjectorOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { currentUser } = useAuth();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['adminLatestPosts'],
    queryFn: () => getLatestPosts(20), // using our existing fetch function
  });

  const handleOptimize = async () => {
    if (!currentUser) return;
    setIsOptimizing(true);
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch('/api/auto-optimize', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      alert(`Optimization complete. Optimized slugs: ${data.optimized_slugs?.join(', ') || 'none'}`);
    } catch (e) {
      console.error(e);
      alert('Optimization failed');
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleInjectProduct = async () => {
    if (!currentUser || !productName || !productPrice || !productUrl) return;
    try {
      const token = await currentUser.getIdToken();
      // Inject into the most recent post for demonstration
      const targetSlug = posts.length > 0 ? posts[0].slug : null;
      const res = await fetch('/api/inject-product', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slug: targetSlug,
          name: productName,
          price: productPrice,
          affiliate_url: productUrl
        })
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Product injected successfully');
      } else {
        alert(`Error: ${data.error}`);
      }
      setInjectorOpen(false);
      setProductName('');
      setProductPrice('');
      setProductUrl('');
    } catch (e) {
      console.error(e);
      alert('Injection failed');
    }
  };

  useEffect(() => {
    const handleOpenInjector = () => setInjectorOpen(true);
    window.addEventListener('open-product-injector', handleOpenInjector);
    return () => window.removeEventListener('open-product-injector', handleOpenInjector);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard Overview</h1>
          <p className="text-sm text-gray-500">Manage your Plinth editorial content and view analytics.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            <Zap size={16} />
            {isOptimizing ? 'Optimizing...' : 'AI Optimizer'}
          </button>
          <button 
            onClick={() => setInjectorOpen(true)}
            className="flex items-center gap-2 bg-[var(--color-mocha)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            <Plus size={16} />
            Product Injector
          </button>
        </div>
      </div>

      {/* Latest Posts Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 font-medium text-gray-900 flex justify-between items-center">
          Latest Posts
          <button className="text-sm text-[var(--color-mocha)] hover:text-opacity-80 transition-colors flex items-center font-medium">
            View All <FileEdit size={14} className="ml-1" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Title</th>
                <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Slug</th>
                <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs text-right">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-400">
                    <div className="w-6 h-6 border-2 border-[var(--color-mocha)] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    Loading posts...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                    No posts found.
                  </td>
                </tr>
              ) : (
                posts.map(post => (
                  <tr key={post.slug} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 line-clamp-1">{post.title}</div>
                      <div className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock size={12} className="mr-1" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">
                      /{post.slug}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                        <Eye size={14} className="mr-1.5" />
                        {post.views?.toLocaleString() || 0}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Injector Modal */}
      {injectorOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setInjectorOpen(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900">Product Injector</h3>
              <button onClick={() => setInjectorOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-500 mb-2">
                Inject a new product recommendation. AI paragraph placement will be added later.
              </p>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Product Name</label>
                <input 
                  type="text" 
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  placeholder="e.g. Boucle Accent Chair"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-mocha)] focus:border-transparent transition-all sm:text-sm" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Price</label>
                <input 
                  type="text" 
                  value={productPrice}
                  onChange={e => setProductPrice(e.target.value)}
                  placeholder="e.g. $249.00"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-mocha)] focus:border-transparent transition-all sm:text-sm" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Affiliate URL</label>
                <input 
                  type="url" 
                  value={productUrl}
                  onChange={e => setProductUrl(e.target.value)}
                  placeholder="https://amazon.com/dp/..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-mocha)] focus:border-transparent transition-all sm:text-sm" 
                />
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setInjectorOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleInjectProduct}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-mocha)] text-white hover:bg-opacity-90 transition-colors"
              >
                Inject Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
