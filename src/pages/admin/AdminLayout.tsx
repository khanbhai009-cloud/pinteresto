import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, FileText, BarChart3, PackagePlus, Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Posts', path: '/admin/posts', icon: FileText },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'Product Injector', action: 'injector', icon: PackagePlus },
  ];

  return (
    <div className="flex h-screen bg-[#f9fafb] text-[#111827]">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link to="/" className="font-serif text-2xl font-bold text-[var(--color-mocha)] no-underline">
            Plinth
          </Link>
          <button className="md:hidden p-2 text-gray-500" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            if (item.action) {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    // We'll handle this via an event to open the modal from anywhere
                    window.dispatchEvent(new CustomEvent('open-product-injector'));
                    if (sidebarOpen) setSidebarOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path!}
                onClick={() => setSidebarOpen(false)}
                className={`flex flex-row items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors no-underline ${
                  isActive 
                    ? 'bg-[var(--color-mocha)] text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white/80' : 'text-gray-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex flex-row items-center justify-between h-16 px-6 bg-white border-b border-gray-200 md:hidden">
          <button className="p-2 -ml-2 text-gray-500 rounded-md hover:bg-gray-100" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="font-serif text-xl font-bold text-[var(--color-mocha)]">Admin</div>
          <div className="w-8"></div> {/* Spacer */}
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
