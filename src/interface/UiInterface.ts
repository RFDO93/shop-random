export interface RouteActiveInterface {
  name: string
  path?: string
  icon: string
}

// Define a type for the slice state
export interface UIState {
  routeActive?: RouteActiveInterface
}
