CREATE TABLE `series` (
  `series_id` int PRIMARY KEY NOT NULL,
  `series_name` varchar(255) NOT NULL,
  `series_description` text NOT NULL
);

CREATE TABLE `products` (
  `product_id` int PRIMARY KEY NOT NULL,
  `product_cost` decimal(10,2),
  `product_price` decimal(10,2) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `series_id` int NOT NULL,
  `product_qty` int,
  `image_id` int
);

CREATE TABLE `images` (
  `image_id` int PRIMARY KEY NOT NULL,
  `image_path` text NOT NULL
);

CREATE TABLE `emails` (
  `email_id` int PRIMARY KEY NOT NULL,
  `email_address` email NOT NULL
);

CREATE TABLE `orders` (
  `order_id` int PRIMARY KEY NOT NULL,
  `order_date` date NOT NULL,
  `email_address` email NOT NULL
);

CREATE TABLE `order_lines` (
  `order_line_id` int PRIMARY KEY NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL
);

ALTER TABLE `products` ADD FOREIGN KEY (`series_id`) REFERENCES `series` (`series_id`);

ALTER TABLE `order_lines` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

ALTER TABLE `products` ADD FOREIGN KEY (`image_id`) REFERENCES `images` (`image_path`);

ALTER TABLE `orders` ADD FOREIGN KEY (`email_address`) REFERENCES `emails` (`email_address`);

ALTER TABLE `order_lines` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);
