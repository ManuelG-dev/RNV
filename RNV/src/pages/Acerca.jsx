function Acerca() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Acerca de mí</h1>

      <p><strong>Nombre:</strong> Juan Manuel Guevara Gurrola</p>
      <p><strong>Carrera:</strong> Informática</p>

      <p>
        Soy estudiante de informática interesado en el desarrollo web moderno.  
        Me gusta aprender nuevas tecnologías y aplicarlas en proyectos prácticos.  
        Disfruto resolver problemas lógicos y mejorar mis habilidades de programación.  
        Me interesa crear aplicaciones funcionales que puedan ayudar a las personas.  
        Siempre busco seguir aprendiendo y crecer como desarrollador.
      </p>

      <h3>Habilidades</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React básico</li>
        <li>Trabajo en equipo</li>
      </ul>

      <h3>Imagen</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1fhLinR0gMRoPjh38tlJSmWXZvfm60Ca2Z14dpKpCO6uXmC39GCna_kckQ&s"
        alt="Foto de perfil"
        width="200"
        style={{ borderRadius: "10px", marginTop: "10px" }}
      />
    </div>
  );
}

export default Acerca;