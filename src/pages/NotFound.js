import { Link } from "react-router-dom";

export default function NotFound() {
    return(
    
        <div className="bg-yellow-400 flex items-center justify-center h-full text-white">
            <h1 className="font-bold text-9xl">404</h1>
            <h2 className="font-medium text-2xl">Sorry, page not found</h2>
            <Link to="/" className="text-blue-700 hover:underline">Back to home</Link>
        </div>
        
    )
}