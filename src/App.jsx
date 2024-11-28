import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import { SearchBar } from './components/ui/SearchBar';
import { LoginButton } from './components/auth/LoginButton';
import { CreateListing } from './components/CreateListing';
import { AuthProvider } from './contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

function App() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  const App = () => {
    return (
      <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                  <Link to="/" className="text-2xl font-bold text-gray-900">
                    Real Estate Manager
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/create"
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Add Listing
                    </Link>
                    <LoginButton />
                  </div>
                </div>
                <div className="mt-4">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>
              </header>

              <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/create" element={<CreateListing />} />
                <Route path="/" element={
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Property cards will be rendered here */}
                  </div>
                } />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
        <Header/>
        <About/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
      </div>
    )
  };
}

export default App
