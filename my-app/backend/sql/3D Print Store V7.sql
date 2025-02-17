CREATE TABLE `series` (
  `series_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `series_name` varchar(255) NOT NULL,
  `series_description` text NOT NULL
);

CREATE TABLE `products` (
  `product_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_cost` decimal(10,2),
  `product_price` decimal(10,2) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 1,
  `series_id` int NOT NULL,
  `product_qty` int,
  `image_id` int
);

CREATE TABLE `images` (
  `image_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `image_path` text NOT NULL
);

CREATE TABLE `emails` (
  `email_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email_address` varchar(255) NOT NULL
);

CREATE TABLE `orders` (
  `order_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `email_id` int NOT NULL
);

CREATE TABLE `order_lines` (
  `order_line_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL
);

ALTER TABLE `products` ADD FOREIGN KEY (`series_id`) REFERENCES `series` (`series_id`);

ALTER TABLE `order_lines` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

ALTER TABLE `products` ADD FOREIGN KEY (`image_id`) REFERENCES `images` (`image_id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`email_id`) REFERENCES `emails` (`email_id`);

ALTER TABLE `order_lines` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);
