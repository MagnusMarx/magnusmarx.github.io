var map = {
    title: "Pathway",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([-3.16, -0.33999999999999997, -54.01]);
        a.c([-4.89, -0.33999999999999997, -53.68]);
        a.c([-1.41, -0.42000000000000004, -54.09]);
        a.c([0.25, -0.4700000000000001, -54.1]);
        a.c([1.9, -0.5200000000000001, -54.21]);
        a.c([-1.48, -0.91, -87.35]);
        a.c([-4.25, 1.21, -103.82]);
        a.c([-3.03, 1.31, -103.82]);
        a.c([-1.72, 4.01, -111.9]);
        a.c([-7.58, -0.42000000000000004, -155.04]);
        a.c([30.49, -0.61, -213.26]);
        a.c([30.49, -0.61, -213.86]);
        a.p([0.35, -0.88, -1.97], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.18, -0.98, -38.12], [0, 0, 0], [12.2, 0.62, 67.1]);
        a.p([0.19, -0.92, -28.64], [0, 0.62, 0], [11.82, 0.84, 1.48]);
        a.p([0.2, -1.18, -34.89], [0, 1.19, 0], [12.22, 0.48, 2]);
        a.p([-2.8, -1.47, -84.35], [0, 0, 0], [4.92, 1.52, 25.58]);
        a.p([-2.78, 1.05, -105.46], [0, 0.31, 0], [4.98, 1.66, 18.54]);
        a.p([-4.3, 6.29, -122.3], [0.17, 0.31, 0], [4.98, 1.66, 18.54]);
        a.p([-5.81, 9.44, -139.47], [3.16, 9.39, -0.03], [4.98, 1.66, 18.54]);
        a.p([-6.22, -1.2, -160.42], [0, 0, 0], [4.92, 1.52, 20.88]);
        a.p([-3.52, -1.2, -181.94], [-0.24, 0, 0], [2.12, 1.52, 24.94]);
        a.p([7.74, -1.22, -202.15], [-0.79, 0, 0], [2.12, 1.52, 24.94]);
        a.p([27.61, -1.21, -212.41], [-1.41, 0, 0], [3.1, 1.52, 25.28]);
        a.p([91.79, 12.46, -224.02], [-1.57, 0, 0], [11.84, 1.52, 18.02]);
        a.p([98.35, 12.47, -251.24], [0.44, 0, 0], [3.1, 1.52, 17.3]);
        a.p([99.5, 12.49, -236.96], [-0.25, 0, 0], [3.1, 1.52, 17.3]);
        a.p([88.49, 12.46, -260.63], [1.2, 0, 0], [3.1, 1.52, 17.3]);
        a.p([75.08, 17.62, -262.92], [1.67, 0.72, 0], [3.1, 1.52, 17.3]);
        a.p([44.58, -1.31, -215.81], [-1.57, 0, 0], [3.1, 1.52, 17.3]);
        a.e([71.77, 21.22, -262.29]);
    },
    post: function() {
        a.m('C0').unfreezeWorldMatrix();
        a.m('C1').unfreezeWorldMatrix();
        a.m('C2').unfreezeWorldMatrix();
        a.m('C3').unfreezeWorldMatrix();
        a.m('C4').unfreezeWorldMatrix();
        a.m('C5').unfreezeWorldMatrix();
        a.m('C6').unfreezeWorldMatrix();
        a.m('C7').unfreezeWorldMatrix();
        a.m('C8').unfreezeWorldMatrix();
        a.m('C9').unfreezeWorldMatrix();
        a.m('C10').unfreezeWorldMatrix();
        a.m('C11').unfreezeWorldMatrix();
        a.m('P0').unfreezeWorldMatrix();
        a.m('P1').unfreezeWorldMatrix();
        a.m('P2').unfreezeWorldMatrix();
        a.m('P3').unfreezeWorldMatrix();
        a.m('P4').unfreezeWorldMatrix();
        a.m('P5').unfreezeWorldMatrix();
        a.m('P6').unfreezeWorldMatrix();
        a.m('P7').unfreezeWorldMatrix();
        a.m('P8').unfreezeWorldMatrix();
        a.m('P9').unfreezeWorldMatrix();
        a.m('P10').unfreezeWorldMatrix();
        a.m('P11').unfreezeWorldMatrix();
        a.m('P12').unfreezeWorldMatrix();
        a.m('P13').unfreezeWorldMatrix();
        a.m('P14').unfreezeWorldMatrix();
        a.m('P15').unfreezeWorldMatrix();
        a.m('P16').unfreezeWorldMatrix();
        a.m('P17').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 34.519999999999996) {
                    speed = default_speed * 1.4;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -207.07999999999998) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -214.62) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P17').position.x += 0.22000000000000003;
                a.m('P17').position.y += 0.1;
                if (PZ < -278.14) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.m('C0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C0').rotation.x = 0;
        a.m('C0').rotation.y = 0;
        a.m('C0').rotation.z = 0;
        a.m('C0').position.x = -3.16;
        a.m('C0').position.y = -0.33999999999999997;
        a.m('C0').position.z = -54.01;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = -4.89;
        a.m('C1').position.y = -0.33999999999999997;
        a.m('C1').position.z = -53.68;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = -1.41;
        a.m('C2').position.y = -0.42000000000000004;
        a.m('C2').position.z = -54.09;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('C3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C3').rotation.x = 0;
        a.m('C3').rotation.y = 0;
        a.m('C3').rotation.z = 0;
        a.m('C3').position.x = 0.25;
        a.m('C3').position.y = -0.4700000000000001;
        a.m('C3').position.z = -54.1;
        a.m('C3').scaling.x = 2;
        a.m('C3').scaling.y = 2;
        a.m('C3').scaling.z = 2;
        a.m('C4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C4').rotation.x = 0;
        a.m('C4').rotation.y = 0;
        a.m('C4').rotation.z = 0;
        a.m('C4').position.x = 1.9;
        a.m('C4').position.y = -0.5200000000000001;
        a.m('C4').position.z = -54.21;
        a.m('C4').scaling.x = 2;
        a.m('C4').scaling.y = 2;
        a.m('C4').scaling.z = 2;
        a.m('C5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C5').rotation.x = 0;
        a.m('C5').rotation.y = 0;
        a.m('C5').rotation.z = 0;
        a.m('C5').position.x = -1.48;
        a.m('C5').position.y = -0.91;
        a.m('C5').position.z = -87.35;
        a.m('C5').scaling.x = 2;
        a.m('C5').scaling.y = 2;
        a.m('C5').scaling.z = 2;
        a.m('C6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C6').rotation.x = 0;
        a.m('C6').rotation.y = 0;
        a.m('C6').rotation.z = 0;
        a.m('C6').position.x = -4.25;
        a.m('C6').position.y = 1.21;
        a.m('C6').position.z = -103.82;
        a.m('C6').scaling.x = 2;
        a.m('C6').scaling.y = 2;
        a.m('C6').scaling.z = 2;
        a.m('C7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C7').rotation.x = 0;
        a.m('C7').rotation.y = 0;
        a.m('C7').rotation.z = 0;
        a.m('C7').position.x = -3.03;
        a.m('C7').position.y = 1.31;
        a.m('C7').position.z = -103.82;
        a.m('C7').scaling.x = 2;
        a.m('C7').scaling.y = 2;
        a.m('C7').scaling.z = 2;
        a.m('C8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C8').rotation.x = 0;
        a.m('C8').rotation.y = 0;
        a.m('C8').rotation.z = 0;
        a.m('C8').position.x = -1.72;
        a.m('C8').position.y = 4.01;
        a.m('C8').position.z = -111.9;
        a.m('C8').scaling.x = 2;
        a.m('C8').scaling.y = 2;
        a.m('C8').scaling.z = 2;
        a.m('C9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C9').rotation.x = 0;
        a.m('C9').rotation.y = 0;
        a.m('C9').rotation.z = 0;
        a.m('C9').position.x = -7.58;
        a.m('C9').position.y = -0.42000000000000004;
        a.m('C9').position.z = -155.04;
        a.m('C9').scaling.x = 2;
        a.m('C9').scaling.y = 2;
        a.m('C9').scaling.z = 2;
        a.m('C10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C10').rotation.x = 0;
        a.m('C10').rotation.y = 0;
        a.m('C10').rotation.z = 0;
        a.m('C10').position.x = 30.49;
        a.m('C10').position.y = -0.61;
        a.m('C10').position.z = -213.26;
        a.m('C10').scaling.x = 2;
        a.m('C10').scaling.y = 2;
        a.m('C10').scaling.z = 2;
        a.m('C11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C11').rotation.x = 0;
        a.m('C11').rotation.y = 0;
        a.m('C11').rotation.z = 0;
        a.m('C11').position.x = 30.49;
        a.m('C11').position.y = -0.61;
        a.m('C11').position.z = -213.86;
        a.m('C11').scaling.x = 2;
        a.m('C11').scaling.y = 2;
        a.m('C11').scaling.z = 2;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0.35;
        a.m('P0').position.y = -0.88;
        a.m('P0').position.z = -1.97;
        a.m('P0').scaling.x = 2.82;
        a.m('P0').scaling.y = 0.48;
        a.m('P0').scaling.z = 5.16;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = 0.18;
        a.m('P1').position.y = -0.98;
        a.m('P1').position.z = -38.12;
        a.m('P1').scaling.x = 12.2;
        a.m('P1').scaling.y = 0.62;
        a.m('P1').scaling.z = 67.1;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0.62;
        a.m('P2').rotation.y = 0;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 0.19;
        a.m('P2').position.y = -0.92;
        a.m('P2').position.z = -28.64;
        a.m('P2').scaling.x = 11.82;
        a.m('P2').scaling.y = 0.84;
        a.m('P2').scaling.z = 1.48;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 1.19;
        a.m('P3').rotation.y = 0;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = 0.2;
        a.m('P3').position.y = -1.18;
        a.m('P3').position.z = -34.89;
        a.m('P3').scaling.x = 12.22;
        a.m('P3').scaling.y = 0.48;
        a.m('P3').scaling.z = 2;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = 0;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = -2.8;
        a.m('P4').position.y = -1.47;
        a.m('P4').position.z = -84.35;
        a.m('P4').scaling.x = 4.92;
        a.m('P4').scaling.y = 1.52;
        a.m('P4').scaling.z = 25.58;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0.31;
        a.m('P5').rotation.y = 0;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -2.78;
        a.m('P5').position.y = 1.05;
        a.m('P5').position.z = -105.46;
        a.m('P5').scaling.x = 4.98;
        a.m('P5').scaling.y = 1.66;
        a.m('P5').scaling.z = 18.54;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0.31;
        a.m('P6').rotation.y = 0.17;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = -4.3;
        a.m('P6').position.y = 6.29;
        a.m('P6').position.z = -122.3;
        a.m('P6').scaling.x = 4.98;
        a.m('P6').scaling.y = 1.66;
        a.m('P6').scaling.z = 18.54;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 9.39;
        a.m('P7').rotation.y = 3.16;
        a.m('P7').rotation.z = -0.03;
        a.m('P7').position.x = -5.81;
        a.m('P7').position.y = 9.44;
        a.m('P7').position.z = -139.47;
        a.m('P7').scaling.x = 4.98;
        a.m('P7').scaling.y = 1.66;
        a.m('P7').scaling.z = 18.54;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = -6.22;
        a.m('P8').position.y = -1.2;
        a.m('P8').position.z = -160.42;
        a.m('P8').scaling.x = 4.92;
        a.m('P8').scaling.y = 1.52;
        a.m('P8').scaling.z = 20.88;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = -0.24;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = -3.52;
        a.m('P9').position.y = -1.2;
        a.m('P9').position.z = -181.94;
        a.m('P9').scaling.x = 2.12;
        a.m('P9').scaling.y = 1.52;
        a.m('P9').scaling.z = 24.94;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = -0.79;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = 7.74;
        a.m('P10').position.y = -1.22;
        a.m('P10').position.z = -202.15;
        a.m('P10').scaling.x = 2.12;
        a.m('P10').scaling.y = 1.52;
        a.m('P10').scaling.z = 24.94;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = -1.41;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 27.61;
        a.m('P11').position.y = -1.21;
        a.m('P11').position.z = -212.41;
        a.m('P11').scaling.x = 3.1;
        a.m('P11').scaling.y = 1.52;
        a.m('P11').scaling.z = 25.28;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = -1.57;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = 91.79;
        a.m('P12').position.y = 12.46;
        a.m('P12').position.z = -224.02;
        a.m('P12').scaling.x = 11.84;
        a.m('P12').scaling.y = 1.52;
        a.m('P12').scaling.z = 18.02;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0.44;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = 98.35;
        a.m('P13').position.y = 12.47;
        a.m('P13').position.z = -251.24;
        a.m('P13').scaling.x = 3.1;
        a.m('P13').scaling.y = 1.52;
        a.m('P13').scaling.z = 17.3;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = -0.25;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = 99.5;
        a.m('P14').position.y = 12.49;
        a.m('P14').position.z = -236.96;
        a.m('P14').scaling.x = 3.1;
        a.m('P14').scaling.y = 1.52;
        a.m('P14').scaling.z = 17.3;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 1.2;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = 88.49;
        a.m('P15').position.y = 12.46;
        a.m('P15').position.z = -260.63;
        a.m('P15').scaling.x = 3.1;
        a.m('P15').scaling.y = 1.52;
        a.m('P15').scaling.z = 17.3;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0.72;
        a.m('P16').rotation.y = 1.67;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = 75.08;
        a.m('P16').position.y = 17.62;
        a.m('P16').position.z = -262.92;
        a.m('P16').scaling.x = 3.1;
        a.m('P16').scaling.y = 1.52;
        a.m('P16').scaling.z = 17.3;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = -1.57;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = 44.58;
        a.m('P17').position.y = -1.31;
        a.m('P17').position.z = -215.81;
        a.m('P17').scaling.x = 3.1;
        a.m('P17').scaling.y = 1.52;
        a.m('P17').scaling.z = 17.3;
    },
    physics_update: function() {},
    render_update: function() {}
}
