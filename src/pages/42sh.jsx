export default function FortyTwoSh() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050b33] text-white">
      <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="/tcsh.jpg"
          alt="Photo de profil"
          className="w-100 h-100 object-cover"
        />
      </div>
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Projet 42sh</h1>
        <p className="text-lg mb-8">42sh est un projet de développement d'un shell basé sur tcsh.</p>
        <p className="text-xl">
          Vous pouvez consulter le code source sur GitHub :{' '}
          <a
            href="https://github.com/MoanaPiquet/42sh.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold"
          >
            GitHub - Projet 42sh
          </a>
        </p>
      </div>
    </div>
  );
}
