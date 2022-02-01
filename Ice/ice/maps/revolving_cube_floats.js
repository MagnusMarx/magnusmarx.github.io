var map = {
    title: "Revolving Cube Floats",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([94.3, 5.16, -565.03]);
        a.y([0, -6.01, -115.52], [0, 0, 0], [8, 1, 8], 2.0, 1.0);
        a.y([0, -4, -9], [0, -1.57, 0], [8, 20, 8], 2.0, 0);
        a.y([91.89, 5.2, -369.73], [0, -1.57, 0], [8, 20, 8], 2.0, 0);
        a.p([0, -3, -1], [0, 0, 0], [4, 4, 8], 1, 0);
        a.p([147.47, -68.42, -204], [0, 0, -0.66], [200, 8, 8], 1, 0);
        a.p([147.51, -68.46, -236], [0, 0, -0.59], [200, 8.2, 8.4], 1, 0);
        a.p([147.49, -68.44, -220], [0, 0, -0.63], [200, 8.2, 8.4], 1, 0);
        a.p([147.53, -68.48, -252], [0, 0, -0.59], [200, 8.2, 8.4], 1, 0);
        a.p([147.55, -68.5, -268], [0, 0, -0.56], [200, 8.2, 8.4], 1, 0);
        a.p([147.56, -68.51, -276], [0, 0, -0.57], [200, 8.2, 8.4], 1, 0);
        a.p([147.57, -68.52, -284], [0, 0, -0.58], [200, 8.2, 8.4], 1, 0);
        a.p([147.59, -68.54, -300], [0, 0, -0.59], [200, 8.2, 8.4], 1, 0);
        a.p([147.58, -68.53, -292], [0, 0, -0.58], [200, 8.2, 8.4], 1, 0);
        a.p([147.63, -68.58, -332], [0, 0, -0.56], [200, 8.2, 8.4], 1, 0);
        a.p([147.61, -68.56, -316], [0, 0, -0.58], [200, 8.2, 8.4], 1, 0);
        a.p([147.65, -68.6, -352], [0, 0, -0.54], [200, 8.2, 16.2], 1, 0);
        a.p([147.48, -68.43, -212.01], [0, 0, -0.72], [200, 8.2, 8.4], 1, 0);
        a.p([147.5, -68.45, -228], [0, 0, -0.77], [200, 8.2, 8.4], 1, 0);
        a.p([147.52, -68.47, -244], [0, 0, -0.82], [200, 8.2, 8.4], 1, 0);
        a.p([147.54, -68.49, -260], [0, 0, -0.91], [200, 8.2, 8.4], 1, 0);
        a.p([147.6, -68.55, -308], [0, 0, -1.24], [200, 8.2, 8.4], 1, 0);
        a.p([147.64, -68.59, -340], [0, 0, -1.4], [200, 8.2, 8.4], 1, 0);
        a.p([147.62, -68.57, -324], [0, 0, -1.31], [200, 8.2, 8.4], 1, 0);
        a.y([91.89, 5.2, -363.85], [0, 0, 0], [5.5, 5.5, 5.5], 1, 0);
        a.p([105.41, 4, -511.58], [0, 0, 0.79], [2, 8, 1], 1.0, 0);
        a.p([26.65, -9.49, -143.55], [-0.79, 1.05, 0], [18, 1, 20], 1.0, 0);
        a.p([33.27, -1.45, -150.16], [-0.79, 0, 0], [18, 1, 8], 1.0, 0);
        a.p([38.96, -2.69, -155.92], [-0.79, 0, 0.17], [14, 1, 8], 1.0, 0);
        a.p([44.91, -3.5, -161.53], [-0.79, 0, 0.35], [10, 1, 8], 1.0, 0);
        a.p([53.78, -4.36, -169.84], [-0.79, 0, 0.52], [10, 1, 16], 1.0, 0);
        a.p([64.87, -4.75, -179.62], [-0.79, 0, 0.7], [10, 1, 16], 1.0, 0);
        a.p([69.71, -4.36, -191.13], [0, 0, 0.7], [10, 1, 18], 1.0, 0);
        a.p([13.48, -10, -130.5], [-0.79, 0, 0], [18, 1, 24], 1.0, 0);
        a.p([104.77, 6.59, -511.56], [0, 0, -1.57], [2, 6, 1], 1.0, 0);
        a.p([102.72, 4.52, -511.57], [0, 0, 0], [2, 6, 1], 1.0, 0);
        a.p([103.13, 2.57, -488.11], [0, 0, 0.79], [2, 6, 1], 1.0, 0);
        a.p([103.13, 5.63, -488.1], [0, 0, -0.79], [2, 6, 1], 1.0, 0);
        a.p([105.41, 4, -488.12], [0, 0, -1.57], [2, 8, 1], 1.0, 0);
        a.p([16.09, -6.48, -132.13], [-0.79, 0, 0], [12, 1, 26], 2.0, 0);
        a.p([17.99, -2.04, -134.03], [-0.79, 0, 0], [6, 1, 30], 3.0, 0);
        a.p([94.3, 5.05, -566.41], [0, 0, 0], [2, 2, 1], 3.0, 0);
        a.p([95.68, 14.17, -530], [0, 0, 0], [6, 10, 72], 3.0, 0);
    },
    post: function() {
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
        a.m('P18').unfreezeWorldMatrix();
        a.m('P19').unfreezeWorldMatrix();
        a.m('Y3').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 0) {
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'z', -2.0);
                a.rot('P0', 'z', 1.0);
                if (PZ < -100) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -100) {
                    speed = default_speed * 2.0;
                    steer = default_steer * 1.1;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -200) {
                    speed = default_speed;
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -200) {
                    speed = default_speed * 2.0;
                    a.g(-2.0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 5:
                a.rot('P1', 'z', -0.075);
                a.rot('P2', 'z', -0.075);
                a.rot('P3', 'z', -0.075);
                a.rot('P4', 'z', -0.075);
                a.rot('P5', 'z', -0.075);
                a.rot('P6', 'z', -0.075);
                a.rot('P7', 'z', -0.075);
                a.rot('P8', 'z', -0.075);
                a.rot('P9', 'z', -0.075);
                a.rot('P10', 'z', -0.075);
                a.rot('P11', 'z', -0.075);
                a.rot('P12', 'z', -0.075);
                a.rot('P13', 'z', 0.075);
                a.rot('P14', 'z', 0.075);
                a.rot('P15', 'z', 0.075);
                a.rot('P16', 'z', 0.075);
                a.rot('P17', 'z', 0.075);
                a.rot('P18', 'z', 0.075);
                a.rot('P19', 'z', 0.075);
                if (PZ < -300) {
                    speed = default_speed;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -300) {
                    speed = default_speed * 2.0;
                    a.g(0.0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 7:
                a.rot('P1', 'z', -0.075);
                a.rot('P2', 'z', -0.075);
                a.rot('P3', 'z', -0.075);
                a.rot('P4', 'z', -0.075);
                a.rot('P5', 'z', -0.075);
                a.rot('P6', 'z', -0.075);
                a.rot('P7', 'z', -0.075);
                a.rot('P8', 'z', -0.075);
                a.rot('P9', 'z', -0.075);
                a.rot('P10', 'z', -0.075);
                a.rot('P11', 'z', -0.075);
                a.rot('P12', 'z', -0.075);
                a.rot('P13', 'z', 0.075);
                a.rot('P14', 'z', 0.075);
                a.rot('P15', 'z', 0.075);
                a.rot('P16', 'z', 0.075);
                a.rot('P17', 'z', 0.075);
                a.rot('P18', 'z', 0.075);
                a.rot('P19', 'z', 0.075);
                if (PZ < -364) {
                    speed = default_speed;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -364) {
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 9:
                a.mov('Y3', 'z', -2.0);
                a.rot('Y3', 'z', -0.2);
                if (PZ < -494) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -494) {
                    speed = default_speed * 2.1;
                    a.g(2.0, 0.4, 0);
                    this.section_id += 1
                }
                break;
            case 11:
                a.mov('Y3', 'z', -2.0);
                a.rot('Y3', 'z', -0.2);
                if (PZ < -566) {
                    speed = default_speed;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [0, -6.01, -115.52], [0, 0, 0], [8, 1, 8]);
        a.re('Y1', [0, -4, -9], [0, -1.57, 0], [8, 20, 8]);
        a.re('Y2', [91.89, 5.2, -369.73], [0, -1.57, 0], [8, 20, 8]);
        a.re('P0', [0, -3, -1], [0, 0, 0], [4, 4, 8]);
        a.re('P1', [147.47, -68.42, -204], [0, 0, -0.66], [200, 8, 8]);
        a.re('P2', [147.51, -68.46, -236], [0, 0, -0.59], [200, 8.2, 8.4]);
        a.re('P3', [147.49, -68.44, -220], [0, 0, -0.63], [200, 8.2, 8.4]);
        a.re('P4', [147.53, -68.48, -252], [0, 0, -0.59], [200, 8.2, 8.4]);
        a.re('P5', [147.55, -68.5, -268], [0, 0, -0.56], [200, 8.2, 8.4]);
        a.re('P6', [147.56, -68.51, -276], [0, 0, -0.57], [200, 8.2, 8.4]);
        a.re('P7', [147.57, -68.52, -284], [0, 0, -0.58], [200, 8.2, 8.4]);
        a.re('P8', [147.59, -68.54, -300], [0, 0, -0.59], [200, 8.2, 8.4]);
        a.re('P9', [147.58, -68.53, -292], [0, 0, -0.58], [200, 8.2, 8.4]);
        a.re('P10', [147.63, -68.58, -332], [0, 0, -0.56], [200, 8.2, 8.4]);
        a.re('P11', [147.61, -68.56, -316], [0, 0, -0.58], [200, 8.2, 8.4]);
        a.re('P12', [147.65, -68.6, -352], [0, 0, -0.54], [200, 8.2, 16.2]);
        a.re('P13', [147.48, -68.43, -212.01], [0, 0, -0.72], [200, 8.2, 8.4]);
        a.re('P14', [147.5, -68.45, -228], [0, 0, -0.77], [200, 8.2, 8.4]);
        a.re('P15', [147.52, -68.47, -244], [0, 0, -0.82], [200, 8.2, 8.4]);
        a.re('P16', [147.54, -68.49, -260], [0, 0, -0.91], [200, 8.2, 8.4]);
        a.re('P17', [147.6, -68.55, -308], [0, 0, -1.24], [200, 8.2, 8.4]);
        a.re('P18', [147.64, -68.59, -340], [0, 0, -1.4], [200, 8.2, 8.4]);
        a.re('P19', [147.62, -68.57, -324], [0, 0, -1.31], [200, 8.2, 8.4]);
        a.re('Y3', [91.89, 5.2, -363.85], [0, 0, 0], [5.5, 5.5, 5.5]);
        a.re('P20', [105.41, 4, -511.58], [0, 0, 0.79], [2, 8, 1]);
        a.re('P21', [26.65, -9.49, -143.55], [-0.79, 1.05, 0], [18, 1, 20]);
        a.re('P22', [33.27, -1.45, -150.16], [-0.79, 0, 0], [18, 1, 8]);
        a.re('P23', [38.96, -2.69, -155.92], [-0.79, 0, 0.17], [14, 1, 8]);
        a.re('P24', [44.91, -3.5, -161.53], [-0.79, 0, 0.35], [10, 1, 8]);
        a.re('P25', [53.78, -4.36, -169.84], [-0.79, 0, 0.52], [10, 1, 16]);
        a.re('P26', [64.87, -4.75, -179.62], [-0.79, 0, 0.7], [10, 1, 16]);
        a.re('P27', [69.71, -4.36, -191.13], [0, 0, 0.7], [10, 1, 18]);
        a.re('P28', [13.48, -10, -130.5], [-0.79, 0, 0], [18, 1, 24]);
        a.re('P29', [104.77, 6.59, -511.56], [0, 0, -1.57], [2, 6, 1]);
        a.re('P30', [102.72, 4.52, -511.57], [0, 0, 0], [2, 6, 1]);
        a.re('P31', [103.13, 2.57, -488.11], [0, 0, 0.79], [2, 6, 1]);
        a.re('P32', [103.13, 5.63, -488.1], [0, 0, -0.79], [2, 6, 1]);
        a.re('P33', [105.41, 4, -488.12], [0, 0, -1.57], [2, 8, 1]);
        a.re('P34', [16.09, -6.48, -132.13], [-0.79, 0, 0], [12, 1, 26]);
        a.re('P35', [17.99, -2.04, -134.03], [-0.79, 0, 0], [6, 1, 30]);
        a.re('P36', [94.3, 5.05, -566.41], [0, 0, 0], [2, 2, 1]);
        a.re('P37', [95.68, 14.17, -530], [0, 0, 0], [6, 10, 72]);
    },
    physics_update: function() {},
    render_update: function() {}
}
