//import { NavLink } from "react-router";
export function Footer() {
  return (
    <footer className="bg-[#003049] border-t border-[#003049]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-200 text-center sm:text-left">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}