export function Header() {
  return (
    <header className="py-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-sm font-bold tracking-wider uppercase text-[#1A2A22]">
          GEORGE BIRMAN
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 text-sm bg-white border border-[#1A2A22] text-[#1A2A22] rounded-xl hover:bg-gray-50 transition-colors font-medium">
            Resume
          </button>
          <button className="px-5 py-2 text-sm bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
