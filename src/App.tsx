
import { useNotify } from "./hooks/useNotify"
function App() {
  const notify = useNotify();
  const handleInfo = () => {
    notify("info", { title: "Information!", description: "This is an info notification." });
  };
  const handleSuccess = () => {
    notify("success", { title: "Operation completed successfully! Operation completed successfully!Operation completed successfully!Operation completed successfully!Operation completed successfully!Operation completed successfully!", description: "Operation completed successfully!" });
  };
  const handleWarning = () => {
    notify("warning", { title: "Warning!", description: "Be careful!" },{position:"bottomRight"});
  };
  const handleError = () => {
    notify("error",{title:"Error!"},{position:"bottomRight",sound:"on"});
  };
  return (
  
    <>
    
      <div  className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="flex gap-4 p-6">
          <button onClick={handleInfo} className="bg-blue-500 text-white px-4 py-2 rounded">Info</button>
          <button onClick={handleSuccess} className="bg-green-500 text-white px-4 py-2 rounded">Success</button>
          <button onClick={handleWarning} className="bg-yellow-500 text-white px-4 py-2 rounded">Warning</button>
          <button onClick={handleError} className="bg-red-500 text-white px-4 py-2 rounded">Error</button>
        </div>
      </div>
    
    </>
  )
}

export default App
