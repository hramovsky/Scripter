var path = '/c/AE_Scripts/'

function script1() {
    var file = new File(path + 'Attacher 0.1.jsx');

               file.open("r");

               eval(file.read());

               file.close();
}

function script2() {
    var file = new File(path + 'LayerRandomShifter.jsx');

               file.open("r");

               eval(file.read());

               file.close();
}

function script3() {
    var file = new File(path + 'Move Anchor Point.jsx');

               file.open("r");

               eval(file.read());

               file.close();
}

function script4() {
    var file = new File(path + 'Remove Effect by Name.jsx');

               file.open("r");

               eval(file.read());

               file.close();
}

