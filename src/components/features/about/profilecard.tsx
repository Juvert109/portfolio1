export function ProfileCard() {
  return (
    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-full bg-linear-to-r from-[#D62828] via-[#F77F00] to-[#FCBF49] opacity-70 blur-md transition duration-300 group-hover:opacity-100" />

        {/* Circular image container */}
        <div className="relative h-96 w-96 overflow-hidden rounded-full border-4 border-[#003049] bg-[#F8F9FA] p-2 shadow-2xl transition-transform duration-300 group-hover:scale-105 lg:h-105 lg:w-105">
          <img
            src="/juvert.jpg"
            alt="Juvert profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}