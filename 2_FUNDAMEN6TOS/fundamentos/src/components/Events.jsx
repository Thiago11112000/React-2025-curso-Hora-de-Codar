const Events = () =>{
const handleMyEvent = (e) => {
console.log(e);
console.log("Ativou o evento");
};

return (
    <div>
<div>
    <button onClick={handleMyEvent}>Clique aqui!</button>
</div>
<div>
    <button onClick={() => console.log("CLicou!")}>
    Clique aqui também!
    </button>
    <button onClick={()=>{
        if(true){
            console.log("Isso não deveria existir =)")
        }
    }}
    >
        Clica aqui, por favor.
    </button>
</div>
    </div>
)
};



export default Events;
