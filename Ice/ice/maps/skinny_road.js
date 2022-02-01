var map = {
    title: "Skinny Road",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([-18.1, -10.13982, -334.43]);
        a.p([-43.92, -11.399939999999999, -304.36], [0, 0, 0], [17.82, 2, 17.62], 3.0, 2.0);
        a.y([-42.69, -4.21988, -268.79], [0, 1.58, 0], [3.66, 59.58, 3.66], 3.0, 0);
        a.p([-85.55, -4.21976, -177.96], [0, 0, 0], [2, 39.78, 2], 1, 0);
        a.p([67.59, -4.2197000000000005, -213.32], [0, 0, 0], [2, 39.78, 2], 1, 0);
        a.p([-85.55, -4.22, -213.32], [0, 0, 0], [2, 39.78, 2], 1, 0);
        a.p([65.34, -4.21994, -177.96], [0, 0, 0], [2, 39.78, 2], 1, 0);
        a.c([-13.24, -10.18982, -326.17], true);
        a.c([-28.07, -10.189760000000001, -312.57], true);
        a.c([-2.85, 0.6103, -64.42], true);
        a.c([-8.82, 1.19, -63.91], true);
        a.c([-5.71, 3.56006, -72.56], true);
        a.c([-10.61, 3.36012, -69.51], true);
        a.c([-2.85, 2.06018, -69.51], true);
        a.c([-33.21, 1.80024, -165.59], true);
        a.c([-28.19, 0.8503000000000001, -155.84], true);
        a.c([-30.91, 1.3399999999999999, -160.88], true);
        a.c([-14.49, -0.49993999999999994, -129.25], true);
        a.c([-37.51, 2.08012, -172.03], true);
        a.c([-42.53, 2.7701800000000003, -181.78], true);
        a.c([-28.07, -10.189760000000001, -319.27], true);
        a.c([-19.84, -10.1897, -306.85], true);
        a.c([-28.07, -10.19, -296.02], true);
        a.c([-36.31, -10.18994, -320.6], true);
        a.c([-35.15, -10.18988, -307.48], true);
        a.c([-12.92, -10.18982, -315.02], true);
        a.c([-19.84, -10.189760000000001, -326.17], true);
        a.c([-35.13, -10.1897, -329.37], true);
        a.c([-22.13, -10.19, -332.99], true);
        a.c([-41.95, -10.18994, -303.56], true);
        a.c([-16.53, -10.18988, -326.17], true);
        a.c([-22.4, -10.18982, -326.17], true);
        a.c([-24.97, -10.189760000000001, -326.17], true);
        a.c([-28.07, -10.1897, -330.8], true);
        a.c([-15.46, -10.19, -331.77], true);
        a.c([-34.73, -10.18994, -326.17], true);
        a.c([-31.01, -10.18988, -326.17], true);
        a.c([-28.07, -10.18982, -326.17], true);
        a.c([-11.94, -0.85976, -124.37], true);
        a.c([-17.6, -0.3497, -136.04], true);
        a.c([-40.23, 2.74, -177.07], true);
        a.c([-22.49, 0.00005999999999994898, -145.17], true);
        a.c([-25.47, 0.85012, -150.66], true);
        a.c([-20.44, -0.12982000000000005, -141.19], true);
        a.p([0.01, -2.71976, -9.02], [0, 0, 0], [9.6, 2, 36.92], 1, 0);
        a.p([-41.71, -2.1697, -209.21], [0.02, -6.28, -0.03], [1.2, 0.2, 81.5], 1, 0);
        a.p([-5.8, 0.33, -66.5], [0.43, 0.34, 0], [10.18, 2, 18.62], 1, 0);
        a.p([-16.68, 0.00006, -82], [1.66, 0.08, 0.05], [14.18, 0.18, 3.78], 1, 0);
        a.p([-13.49, 0.00012, -94.36], [0.99, 0.22, 0.26], [17.72, 0.18, 2.78], 1, 0);
        a.p([-9.43, 0.00018, -108.24], [1.66, 0.08, 0.05], [14.1, 0.18, 3.44], 1, 0);
        a.p([-23.91, 0.00024, -146.39], [2.04, 0.08, 0.05], [83.92, 0.18, 2.46], 1, 0);
        a.p([2.95, -2.8597, -29.79], [1.18, 0, 0], [17.18, 2, 1.58], 1, 0);
        a.p([3.34, -2.86, -42.96], [2.04, 0, 0], [13.4, 2, 1.28], 1, 0);
        a.y([0, -7.26994, -53.89], [0, 0, 0], [11, 11, 11], 1, 0);
        a.y([-24.71, -11.239880000000001, -312.62], [0, 0, 0], [51.58, 1.32, 51.58], 1, 0);
    },
    post: function() {
        a.m('Y0').unfreezeWorldMatrix();
        a.m('P1').unfreezeWorldMatrix();
        a.m('P2').unfreezeWorldMatrix();
        a.m('P3').unfreezeWorldMatrix();
        a.m('P4').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -25.36) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P1', 'z', 6.0);
                a.rot('P2', 'z', 6.0);
                a.rot('P3', 'z', 6.0);
                a.rot('P4', 'z', 6.0);
                if (PZ < -194.89999999999998) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -206.42) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.rot('Y0', 'y', 4.0);
                if (PZ < -316.86) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-43.92, -11.399939999999999, -304.36], [0, 0, 0], [17.82, 2, 17.62]);
        a.re('Y0', [-42.69, -4.21988, -268.79], [0, 1.58, 0], [3.66, 59.58, 3.66]);
        a.re('P1', [-85.55, -4.21976, -177.96], [0, 0, 0], [2, 39.78, 2]);
        a.re('P2', [67.59, -4.2197000000000005, -213.32], [0, 0, 0], [2, 39.78, 2]);
        a.re('P3', [-85.55, -4.22, -213.32], [0, 0, 0], [2, 39.78, 2]);
        a.re('P4', [65.34, -4.21994, -177.96], [0, 0, 0], [2, 39.78, 2]);
        a.re('C0', [-13.24, -10.18982, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-28.07, -10.189760000000001, -312.57], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-2.85, 0.6103, -64.42], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-8.82, 1.19, -63.91], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-5.71, 3.56006, -72.56], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-10.61, 3.36012, -69.51], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [-2.85, 2.06018, -69.51], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-33.21, 1.80024, -165.59], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-28.19, 0.8503000000000001, -155.84], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-30.91, 1.3399999999999999, -160.88], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-14.49, -0.49993999999999994, -129.25], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-37.51, 2.08012, -172.03], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [-42.53, 2.7701800000000003, -181.78], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-28.07, -10.189760000000001, -319.27], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-19.84, -10.1897, -306.85], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-28.07, -10.19, -296.02], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-36.31, -10.18994, -320.6], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-35.15, -10.18988, -307.48], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [-12.92, -10.18982, -315.02], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-19.84, -10.189760000000001, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-35.13, -10.1897, -329.37], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [-22.13, -10.19, -332.99], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [-41.95, -10.18994, -303.56], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [-16.53, -10.18988, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [-22.4, -10.18982, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [-24.97, -10.189760000000001, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [-28.07, -10.1897, -330.8], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [-15.46, -10.19, -331.77], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-34.73, -10.18994, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [-31.01, -10.18988, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [-28.07, -10.18982, -326.17], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [-11.94, -0.85976, -124.37], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [-17.6, -0.3497, -136.04], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [-40.23, 2.74, -177.07], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [-22.49, 0.00005999999999994898, -145.17], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [-25.47, 0.85012, -150.66], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [-20.44, -0.12982000000000005, -141.19], [0, 0, 0], [2, 2, 2]);
        a.re('P5', [0.01, -2.71976, -9.02], [0, 0, 0], [9.6, 2, 36.92]);
        a.re('P6', [-41.71, -2.1697, -209.21], [0.02, -6.28, -0.03], [1.2, 0.2, 81.5]);
        a.re('P7', [-5.8, 0.33, -66.5], [0.43, 0.34, 0], [10.18, 2, 18.62]);
        a.re('P8', [-16.68, 0.00006, -82], [1.66, 0.08, 0.05], [14.18, 0.18, 3.78]);
        a.re('P9', [-13.49, 0.00012, -94.36], [0.99, 0.22, 0.26], [17.72, 0.18, 2.78]);
        a.re('P10', [-9.43, 0.00018, -108.24], [1.66, 0.08, 0.05], [14.1, 0.18, 3.44]);
        a.re('P11', [-23.91, 0.00024, -146.39], [2.04, 0.08, 0.05], [83.92, 0.18, 2.46]);
        a.re('P12', [2.95, -2.8597, -29.79], [1.18, 0, 0], [17.18, 2, 1.58]);
        a.re('P13', [3.34, -2.86, -42.96], [2.04, 0, 0], [13.4, 2, 1.28]);
        a.re('Y1', [0, -7.26994, -53.89], [0, 0, 0], [11, 11, 11]);
        a.re('Y2', [-24.71, -11.239880000000001, -312.62], [0, 0, 0], [51.58, 1.32, 51.58]);
    },
    physics_update: function() {},
    render_update: function() {}
}
