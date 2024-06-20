CREATE TABLE `client` (
  `id` int PRIMARY KEY,
  `nom` varchar(50),
  `prenom` varchar(50),
  `adresse` varchar(50),
  `numero` varchar(50)
);

CREATE TABLE `fournisseur` (
  `id` int PRIMARY KEY,
  `nom` varchar(50),
  `adresse` varchar(50),
  `numero` varchar(50),
  `idarticle` int
);

CREATE TABLE `famille` (
  `id` int PRIMARY KEY,
  `nom` varchar(50),
  `description` varchar(255)
);

CREATE TABLE `article` (
  `id` int PRIMARY KEY,
  `nom` varchar(50),
  `prixunite` int,
  `prixpack` int,
  `paysproduction` varchar(50),
  `regionproduction` varchar(50),
  `anneeproduction` int,
  `quantite` int,
  `quantiteminimum` int,
  `idfamille` int,
  `iddomaine` int
);

CREATE TABLE `domaine` (
  `id` int PRIMARY KEY,
  `nom` varchar(50),
  `adresse` varchar(50),
  `numero` varchar(50),
  `idfournisseur` int
);

ALTER TABLE `article` ADD FOREIGN KEY (`idfamille`) REFERENCES `famille` (`id`);

ALTER TABLE `fournisseur` ADD FOREIGN KEY (`idarticle`) REFERENCES `article` (`id`);

ALTER TABLE `article` ADD FOREIGN KEY (`iddomaine`) REFERENCES `domaine` (`id`);

