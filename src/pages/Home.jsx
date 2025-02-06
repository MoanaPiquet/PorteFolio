export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050b33] text-white">
      <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="/sl-wallpaper.png"
          alt="Photo de profil"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold">Bienvenue sur le Portfolio de Moana Piquet</h1>
      <p className="mt-4 text-lg">Découvrez mes réalisations et projets</p>
    </div>
  );
}
