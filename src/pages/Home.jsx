export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 text-black">
      <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="/sl-wallpaper.png"
          alt="Photo de profil"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold">Bienvenue sur le Portfolio de Moana Piquet</h1>
      <p className="mt-4 text-lg">Découvrez mes réalisations et projets</p>
      
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/MoanaPiquet"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://linkedin.com/in/moana-piquet-7a97052b6"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}
