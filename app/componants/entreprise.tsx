import React from 'react';

// Interface pour typer les données de l'API
interface Entreprise {
    siren: string;
    nom_complet: string;
    siege: {
        code_postal: string;
        libelle_commune: string;
        etat_administratif: string;
    };
    activite_principale: string;
}

async function getEntreprises() {
    // Appel à l'API publique (recherche sur le mot "Tech")
    const res = await fetch('https://recherche-entreprises.api.gouv.fr/search?q=tech&per_page=10', {
        next: { revalidate: 3600 } // Cache les données pendant 1 heure
    });

    if (!res.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await res.json();
    return data.results;
}

export default async function EntreprisesPage() {
    const entreprises: Entreprise[] = await getEntreprises();

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6 text-slate-800">
                Répertoire des Entreprises Tech
            </h1>

            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="px-6 py-4 font-semibold">Nom de l entreprise</th>
                        <th className="px-6 py-4 font-semibold">SIREN</th>
                        <th className="px-6 py-4 font-semibold">Localisation</th>
                        <th className="px-6 py-4 font-semibold">Statut</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                    {entreprises.map((entreprise) => (
                        <tr key={entreprise.siren} className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">
                                {entreprise.nom_complet}
                            </td>
                            <td className="px-6 py-4 font-mono text-xs text-slate-600">
                                {entreprise.siren}
                            </td>
                            <td className="px-6 py-4">
                                {entreprise.siege.libelle_commune} ({entreprise.siege.code_postal})
                            </td>
                            <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      entreprise.siege.etat_administratif === 'A'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                  }`}>
                    {entreprise.siege.etat_administratif === 'A' ? 'Actif' : 'Fermé'}
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}