"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu,
  Bell,
  User,
  X,
  LayoutDashboard,
  ShoppingCart,
  Settings as SettingsIcon,
  LogOut,
  ArrowLeft,
  Search,
  Download
} from 'lucide-react';

const AdminOrders = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
    { icon: ShoppingCart, label: 'Products', href: '/admin/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
    { icon: SettingsIcon, label: 'Settings', href: '/admin/settings' },
    { icon: LogOut, label: 'Sign Out', href: '/signout', isSignOut: true },
  ];

  // sample orders type and data
  type Order = {
    id: string;
    customer: string;
    product: string | string[];
    image: string;
    date: string;
    amount: string | string[];
    quantity: number;
    phone: string;
  };

  const customers = ['Adeola Johnson', 'Nneka Okafor', 'Chinwe Adebayo', 'Amaka Eze', 'Ifeoma Nwosu', 'Ngozi Okoro', 'Funke Adeyemi', 'Bisi Ogunleye', 'Tolu Adebayo', 'Kemi Eze', 'Ada Nwosu'];
  const products = ['Curly Hair Long Hair', 'Classic Bob Straight Hair', 'Long Wavy Curly Hair', 'Pixie Cut Wavy Hair', 'Layered Lob Short Hair', 'Sleek Straight Long Hair'];
  const images = ['/wig21.jpeg', '/wig22.jpeg', '/wig23.jpeg', '/wig24.jpeg', '/wig25.jpeg', '/wig26.jpeg'];
  const amounts = ['₦45,000', '₦38,000', '₦52,000', '₦35,000', '₦42,000', '₦48,000'];

  const orders: Order[] = [];
  for (let i = 45; i >= 1; i--) {
    const id = `#ORD-${i.toString().padStart(3, '0')}`;
    let product: string | string[] = products[(i - 1) % products.length];
    let amount: string | string[] = amounts[(i - 1) % amounts.length];
    if (i === 45) {
      product = ['Long Wavy Curly Hair', 'Classic Bob Straight Hair', 'Pixie Cut Wavy Hair', 'Layered Lob Short Hair'];
      amount = ['₦52,000', '₦38,000', '₦35,000', '₦42,000'];
    } else if (i === 43) {
      product = ['Classic Bob Straight Hair', 'Pixie Cut Wavy Hair', 'Layered Lob Short Hair'];
      amount = ['₦38,000', '₦35,000', '₦42,000'];
    }
    orders.push({
      id,
      customer: customers[(i - 1) % customers.length],
      product,
      image: images[(i - 1) % images.length],
      date: `3/${(i % 28 + 1).toString().padStart(2, '0')}/26 ${(i % 12 + 1).toString().padStart(2, '0')}:39PM`,
      amount,
      quantity: i === 45 ? 3 : (i % 3) + 1,
      phone: `091629195${(85 + (i - 1) % 20).toString()}`
    });
  }


  const filteredOrders = orders.filter(order => {
    const productStr = Array.isArray(order.product) ? order.product.join(' ') : order.product;
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         productStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800 border-b border-gray-700">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Menu size={20} className="text-gray-300" />
            </button>
            <Link href="/admin" className="flex items-center space-x-2">
              <Image src="/wig.png" alt="Logo" width={32} height={32} className="h-8 w-auto object-contain" />
              <span className="text-white font-semibold text-lg">Wigga</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative">
              <Bell size={20} className="text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-gray-300" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 mt-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Orders Received</h1>
          <p className="text-gray-400">Manage and track all customer orders</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Export Button */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                <Download size={20} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Top Pagination */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-400 text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <button 
              className={`px-3 py-1 ${currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500'} text-white rounded transition-colors`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              {currentPage}
            </button>
            <button 
              className={`px-3 py-1 ${currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500'} text-white rounded transition-colors`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Customer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {paginatedOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 relative">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-start space-x-2">
                          {Array.isArray(order.product) ? (
                            order.product.slice(0, 3).map((p, idx) => (
                              <Image key={idx} src={images[idx % images.length]} alt={p} width={30} height={30} className="object-cover rounded-lg" />
                            ))
                          ) : (
                            <Image src={order.image} alt={order.product} width={30} height={30} className="object-cover rounded-lg" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1 text-left">
                          <div className="text-white text-sm break-words">{Array.isArray(order.product) ? 'Multiple products' : order.product}</div>
                          <div className="text-gray-400 text-xs">Qty: {order.quantity} - <span className="text-amber-400">{order.id}</span></div>
                          <div className="text-gray-300 text-xs mt-1">{order.date}</div>
                          {Array.isArray(order.product) && (
                            <div className="text-gray-400 text-xs mt-1">
                              {order.product.slice(1).map((p, idx) => <div key={p} className="break-words">• {p} - {order.amount[idx+1]}</div>)}
                            </div>
                          )}
                          {(() => {
                            const getTotalAmount = (amount: string | string[]) => {
                              if (Array.isArray(amount)) {
                                return amount.reduce((sum, a) => sum + parseInt(a.replace(/[^0-9]/g, '')), 0);
                              } else {
                                return parseInt(amount.replace(/[^0-9]/g, ''));
                              }
                            };
                            const total = getTotalAmount(order.amount);
                            if (Array.isArray(order.product)) {
                              return (
                                <div className="text-white font-medium text-xs mt-1">
                                  ₦{total.toLocaleString()} (Total {order.quantity} items)
                                </div>
                              );
                            } else {
                              return order.quantity > 1 ? (
                                <div className="text-white font-medium text-xs mt-1">
                                  ₦{total.toLocaleString()} x {order.quantity}
                                </div>
                              ) : (
                                <div className="text-white font-medium text-xs mt-1">₦{total.toLocaleString()}</div>
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 relative">
                      <div className="flex flex-col space-y-2">
                        <div className="absolute top-0 right-0 z-10 bg-amber-800 text-white px-2 py-1 rounded text-xs font-semibold">
                          {order.customer}
                        </div>
                        <div className="absolute top-8 right-0 text-gray-400 text-sm break-words mr-2">
                          {order.phone}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-gray-700 border-t border-gray-600 flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button 
                className={`px-3 py-1 ${currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500'} text-white rounded transition-colors`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">
                {currentPage}
              </button>
              <button 
                className={`px-3 py-1 ${currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500'} text-white rounded transition-colors`}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Left Side Menu */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 delay-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 h-full w-64 bg-gray-800 shadow-xl transform transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <Link href="/admin" className="flex items-center space-x-2">
                <Image src="/wig.png" alt="Logo" width={24} height={24} className="h-6 w-auto object-contain" />
                <span className="text-white font-semibold">Wigga</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X size={20} className="text-gray-300" />
              </button>
            </div>
          </div>
          
          <nav className="p-4">
            {/* Back to Store Button */}
            <Link
              href="/"
              className="flex items-center p-3 mb-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowLeft size={20} className="min-w-[20px]" />
              <span className="ml-3 font-medium">Back to Store</span>
            </Link>
           
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center p-3 mb-2 rounded-lg transition-colors group ${
                  item.isSignOut 
                    ? 'mt-20 text-red-500 hover:bg-red-900/20 hover:text-red-400' 
                    : item.label === 'Orders' 
                      ? 'bg-gray-700 text-white' 
                      : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <item.icon size={20} className={`min-w-[20px] ${item.isSignOut ? 'text-red-500' : ''}`} />
                <span className="ml-3 font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
