export default function CPMS() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100 text-black">
      <div className="w-100 h-100 overflow-hidde mb-6">
        <img
          src="/Logo.png"
          alt="Photo du cpms"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Projet CPMS</h1>
        <p className="text-lg mb-8">
          Le projet CPMS a consisté à créer un site internet, automatiser certaines tâches, et gérer un serveur pour faciliter les activités de l'association.
        </p>
        <p className="text-xl">
          Vous pouvez consulter plus d'informations sur ce projet :{' '}
          <a
            href="https://mediationsante.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold"
          >
            Site Internet du CPMS
          </a>
        </p>
      </div>
    </div>
  );
}
