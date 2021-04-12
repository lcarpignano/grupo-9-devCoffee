-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2021 a las 01:50:04
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coffee_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `logo` varchar(45) NOT NULL,
  `photo` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `price` decimal(2,0) NOT NULL,
  `origin` varchar(45) DEFAULT NULL,
  `sale` tinyint(4) DEFAULT NULL,
  `featured` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `logo`, `photo`, `description`, `price`, `origin`, `sale`, `featured`) VALUES
(1, 'HTML + CSS', 'fab fa-html5', '/img/producthtmltwhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '10', 'Brasil', 0, 1),
(2, 'Javascript', 'fab fa-js-square', '/img/productjavascriptwhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '12', 'Nicaragua', 0, 1),
(3, 'Node.js', 'fab fa-node-js', '/img/productnodewhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '12', 'Colombia', 0, 1),
(4, 'Python', 'fab fa-python', '/img/productpythonwhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '11', 'Brasil', 0, 0),
(5, 'Java', 'fab fa-java', '/img/productjavawhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '10', 'Brasil', 0, 0),
(6, 'PHP', 'fab fa-php', '/img/productphpwhite.png', 'Lorem ipsum dolor sit amet, consectetur adipi', '12', 'Colombia', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `birth` date NOT NULL,
  `address` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `photo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `mail`, `password`, `birth`, `address`, `country`, `city`, `photo`) VALUES
(1, 'Luciano', 'Carpignano', 'lushi', 'lushi@dh.com', '$2y$10$ihJyRv3/HG1Bvk6ICmx07eqSOoLEAjEb71QIr3', '0000-00-00', '1234west', '', '', NULL),
(2, 'User1', 'Algo', 'algunusuario', 'user1@users.com', '$2y$10$ihJyRv3/HG1Bvk6ICmx07eqSOoLEAjEb71QIr3', '0000-00-00', 'Evergreen 1234', '', '', NULL),
(3, 'User3', 'Algo3', 'algunusuario', 'user3@users.com', '$2y$10$ihJyRv3/HG1Bvk6ICmx07eqSOoLEAjEb71QIr3', '0000-00-00', 'Evergreen 1234', '', '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weights`
--

CREATE TABLE `weights` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `logo` varchar(45) NOT NULL,
  `grams` int(11) NOT NULL,
  `discount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `weights`
--

INSERT INTO `weights` (`id`, `name`, `logo`, `grams`, `discount`) VALUES
(1, 'weight1', 'weight1', 250, '1'),
(2, 'weight2', 'weight2', 500, '1'),
(3, 'weight3', 'weight3', 1000, '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `weights`
--
ALTER TABLE `weights`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
