export default function Loading(): JSX.Element {
  return (
    <div className="flex h-screen animate-pulse">
      
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4 space-y-4">
        
        {/* Search bar */}
        <div className="h-10 bg-gray-300 rounded-lg"></div>

        {/* User list */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <div className="h-16 border-b flex items-center px-4 gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4">
          
          {/* Incoming message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="bg-gray-300 h-4 w-1/3 rounded-lg"></div>
          </div>

          {/* Outgoing message */}
          <div className="flex justify-end">
            <div className="bg-gray-300 h-4 w-1/4 rounded-lg"></div>
          </div>

          {/* Repeat */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="h-16 border-t p-4">
          <div className="h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}