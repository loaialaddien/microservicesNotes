  # Ticketing Application, with microservices

  ## services 
  * auth for handling everything with authentication
  * tickets , for crud for tickets and whether a ticket can be updated 
  * orders , for order creation and editing
  * expiration, watches for orders and cancels them after 15 minutes
  * payments, for handling payment, cancels orders if payment fails, and completes it if payment succeeds
  ## Technologies
  * Nodejs
  * Docker/kubernetes
  * Mongodb
  * RabbitMQ
  * Redis

this is a resource based microservices approach and not feature based