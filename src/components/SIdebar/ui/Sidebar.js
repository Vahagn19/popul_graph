import { CardTitle,CardHeader,CardContent,Card } from "../../ui/card"
// CardTitle, CardHeader, CardContent, Card 
 function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <aside className="w-64 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-700">
        <div className="h-16 flex items-center justify-center border-b-2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Admin Panel</h2>
        </div>
        <ul>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
       
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
           
              <span className="text-sm font-medium">Users</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
           
              <span className="text-sm font-medium">Orders</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
           
              <span className="text-sm font-medium">Settings</span>
            </a>
          </li>
        </ul>
      </aside>
    
    </div>
  )
}

export default Sidebar