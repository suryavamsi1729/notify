
import { useNotify } from "./hooks/useNotify"
function App() {
  const notify = useNotify();
  const handleInfo = () => {
    notify("info",
      { 
        title: "Information!", 
        message: "This is an info notification." 
      });
  };
  const handleSuccess = () => {
    notify("success", 
      { 
        title: "Operation completed successfully!", 
        message: "You can now design any notification component you want with it — Toasts, Snackbars, or Animations — all using this same logic.",
        action:<button type="button" className="w-auto h-auto p-2 border-[1.5px] border-green-500 text-base/[16px] text-green-500 rounded-lg cursor-pointer">action</button>
      },
      {position:"topLeft"}
    );
  };
  const handleWarning = () => {
    notify("warning", 
      { 
        title: "Warning!",
        message: "You can now design any notification component you want with it — Toasts, Snackbars, or Animations — all using this same logic.",
      },
      {position:"topCenter"});
  };
  const handleError = () => {
    notify("error",
      {
        title:"Error!",
        message: "You can now design any notification component you want with it — Toasts, Snackbars, or Animations — all using this same logic.",
      },{position:"bottomLeft",sound:"on"});
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
