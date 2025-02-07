export default function Corewar() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100 text-black">
      <div className="w-100 h-100 overflow-hidden shadow-lg mb-6">
        <img
          src="/corewar.png"
          alt="Photo de corewar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Projet Corewar</h1>
        <p className="text-lg mb-8">Corewar est un projet de bataille entre programmes en mémoire.</p>
        <p className="text-xl">
          Vous pouvez consulter le code source sur GitHub :{' '}
          <a
            href="https://github.com/MoanaPiquet/corewar.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold"
          >
            GitHub - Projet Corewar
          </a>
        </p>
      </div>
    </div>
  );
}
