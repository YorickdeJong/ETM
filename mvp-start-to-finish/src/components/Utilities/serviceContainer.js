


function ServiceContainer({top, left, title, text, width}) {

    return (
    <div style = {{ backgroundColor: 'rgba(80, 110, 120, 1)', 
    width: width, 
    height: '18%', 
    borderRadius: 30, 
    position: 'absolute', 
    top: top, left: 
    left, 
    paddingTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(120, 120, 160, 1)',
    boxShadow: '4px 4px 8px rgba(70, 100, 120, 1)'}}>
        <div >
            <h1 style = {{fontSize: 40, color: 'rgba(200, 225, 235, 1)', fontWeight: 'bold', textAlign: 'center', }}>{title}</h1>
            <p style = {{fontSize: 30, color: 'rgba(200, 225, 235, 0.8)', paddingLeft: 30, paddingRight: 30, paddingTop: 15}}>{text}</p>
        </div>
    </div>
    )
}

export default ServiceContainer;