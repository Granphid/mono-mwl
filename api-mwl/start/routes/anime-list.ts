import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AnimeListController.getAll')
}).prefix('/mwl/anime-list')
