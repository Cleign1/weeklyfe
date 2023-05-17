export default function AuthLayout({ children }) {
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="mx-auto max-w-lg shadow-lg rounded-lg border p-8 bg-white">

                {children}

            </div>
        </div>
    )
}