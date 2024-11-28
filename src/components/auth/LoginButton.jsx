import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogIn, LogOut } from 'lucide-react';

export function LoginButton() {
  const { user, signInWithGoogle, signOut } = useAuth();

  return user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700">{user.email}</span>
      <button
        onClick={signOut}
        className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </button>
    </div>
  ) : (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      <LogIn className="h-4 w-4" />
      Sign In with Google
    </button>
  );
}