(function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var loader = new THREE.OBJLoader();

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    //scene.add( cube );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 1, 2, 0 );
    scene.add( directionalLight );

    var light = new THREE.PointLight( 0xffffff, 1, 100 );
    light.position.set( 30, 50, 50 );
    scene.add( light );

    camera.position.z = 5;
    camera.position.y = 2;
    camera.position.x = 0;



    loader.load(
        // resource URL
        '/3dmodel/NoshornObj1.obj',
        // Function when resource is loaded
        function ( object ) {
            object.rotation.y += -.5;
            object.scale.x += .5;
            object.scale.z += .5;
            object.scale.y += .5;


            scene.add( object );
            var render = function () {
                requestAnimationFrame( render );

                //object.rotation.x += 0.1;
                object.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            render();
        }
    );







}());

