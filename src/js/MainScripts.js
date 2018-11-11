
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var currentObjectName = "CurrentObjectSingleton";
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

window.onload = initRenderer;

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(event) {
    var container = document.getElementById('canvas');
    var Width = container.clientWidth;
    var Height = container.clientHeight;
    console.log("Setting ratio to :"+Width / Height);
    camera.aspect = Width / Height;
    camera.updateProjectionMatrix();
    document.getElementById("logBox").innerHTML = Width + "," + Height;
    renderer.setSize(Width, Height);
}

//Initial camera position
camera.position.z = 300;

//Setting up orbital controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

//Lighting
var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add(ambientLight);

//Initial call to add model
var fizzMtl = 'fizz_base.mtl';
var fizzObj = 'fizz_base.obj';
addModel(fizzMtl, fizzObj);

animate();

function initRenderer(){
    var container = document.getElementById('canvas');
    var Width = container.clientWidth;
    var Height = container.clientHeight;
    document.getElementById("logBox").innerHTML = Width + "," + Height;
    renderer.setSize(Width, Height);
    console.log("Width: "+Width+" Height: "+Height);
    console.log("Setting ratio to :"+Width / Height);
    camera.aspect = Width / Height;
    camera.updateProjectionMatrix();
    renderer.setClearColor( 0xffffff );
    container.appendChild(renderer.domElement);
}


function addModel(mtlName, objName) {
    console.log("In add model, mtl: "+mtlName+" objName: "+objName);

    var selectedObject = scene.getObjectByName(currentObjectName);
    if(selectedObject){
        removeEntity(selectedObject);
    }

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('/assets/');
    mtlLoader.setPath('/assets/');
    mtlLoader.load(mtlName, function (materials) {

    materials.preload();
    
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/');
    objLoader.load(objName, function (object) {
 
        object.name = currentObjectName;
        //Reference to object added, used to remove before adding objects
        // currentObject = object;
        scene.add(object);
        object.position.y -= 60;
 
    });
 
})

}

function removeEntity(object) {
    var selectedObject = scene.getObjectByName(object.name);
    scene.remove( selectedObject );
    animate();
}

function animate () {
	requestAnimationFrame( animate );

	controls.update();

	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	renderer.render(scene, camera);
    //cameraFollowingLight.position.copy( camera.position );
};