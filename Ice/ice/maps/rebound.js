var map = {
    title: "rebound",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([54.41, 2.58024, -157.51]);
        a.p([35.14, -4.50988, -100.69], [-4.36, 0, 0], [11.62, 2, 3.92], 2.0, 0, 0, 0.6);
        a.p([35.14, -4.50982, -83.82], [-4.71, 0, 0], [11.62, 2, 3.92], 2.0, 0, 0, 0.6);
        a.p([38.2, -4.50976, -109.39], [-5.37, 0, 0], [11.62, 2, 3.92], 2.0, 0, 0, 0.6);
        a.p([43.32, -1.3597, -101.59], [-4.71, 0, 0], [6.1, 1.44, 2.1], 2.0, 0, 0, 0.6);
        a.p([43.33, -0.07, -103.04], [-4.71, 0, -0.68], [4.42, 1.44, 2.1], 2.0, 0, 0, 0.6);
        a.p([43.33, -2.07994, -103.04], [-1.57, 0, -0.68], [4.42, 1.44, 2.1], 2.0, 0, 0, 0.6);
        a.p([27.25, 2.51012, -45.01], [-5.19, 0, 0], [30.08, 15.82, 1.36], 2.0, 0, 0, 0.6);
        a.p([39.53, 2.54018, -143.28], [-3.15, 0, 0], [8.52, 0.3, 8.52], 2.0, 0, 0, 0.6);
        a.p([38.7, -2.31976, -134.3], [-3.27, -0.61, 0.28], [3.3, 3.34, 16.58], 2.0, 0, 0, 0.6);
        a.p([55.27, 2.5403000000000002, -148.04], [-1.53, 0, 0], [8.52, 0.3, 4.12], 2.0, 0, 0, 0.6);
        a.p([37.43, -5.26, -122.5], [-3.15, 0, 0], [8.52, 3.34, 16.58], 2.0, 0, 0, 0.6);
        a.p([18.24, -1.57994, -64.44], [-5.19, 0, 0], [30.08, 1.68, 1.36], 2.0, 0, 0, 0.6);
        a.p([35.14, -9.239880000000001, -104.44], [-4.71, 0, 0], [21.16, 2, 20.92], 3.0, 1000000.0, 0, 0.6);
        a.p([-0.06, 0.67018, -41.8], [0, 1.56, 0], [2, 1.8, 2.6], 3.0, 20.0, 0, 0.6);
        a.y([26.24, 1.62024, -65.39], [0, 0, 0], [2, 73.12, 2], 3.0, 0, 0, 0.6);
        a.y([40.99, 1.6203, -82.63], [0, 0, 0], [2, 73.12, 2], 3.0, 0, 0, 0.6);
        a.y([31.39, 1.62, -95.48], [0, 0, 0], [2, 73.12, 2], 3.0, 0, 0, 0.6);
        a.y([31.8, 1.62006, -123.95], [0, 0, 0], [2, 73.12, 2], 3.0, 0, 0, 0.6);
        a.y([50.53, 1.27012, -147.76], [0, 0, 0], [2, 73.12, 2], 3.0, 0, 0, 0.6);
        a.c([28.56, -3.13976, -61.38], true);
        a.c([31.92, -3.1397000000000004, -63.18], true);
        a.c([31.51, -3.14, -66.56], true);
        a.c([36.84, 3.19006, -140.9], true);
        a.c([42.67, 3.1901200000000003, -146.14], true);
        a.c([56.52, 3.19018, -143.75], true);
        a.c([38.77, 3.19024, -146.14], true);
        a.c([49.4, 3.1902999999999997, -142.96], true);
        a.c([54.04, 3.19, -147.85], true);
        a.p([0, -0.53994, -30.29], [0, 0, 0], [2, 2, 19.84], 1, 0, 0, 0.6);
        a.p([20.84, -4.50988, -48.3], [-5.19, 0, 0], [30.08, 2, 15.82], 2.0, 0, 0, 0.6);
        a.p([35.14, -4.50982, -93.8], [-4.71, 0, 0], [11.62, 2, 3.92], 2.0, 0, 0, 0.6);
        a.p([0, -0.89976, -9.65], [0, 0, 0], [2, 2, 19.84], 1, 0, 0, 0.6);
        a.p([0, -0.8996999999999999, -9.65], [0, 0, 0], [2, 2, 19.84], 1, 0, 0, 0.6);
        a.p([36.01, -4.51, -72.89], [-5.19, 0, 0], [11.3, 2, 10.2], 1, 0, 0, 0.6);
        a.p([30.89, -4.50982, -63.79], [-5.19, 0, 0], [11.62, 2, 3.92], 3.0, 0, 0, 0.6);
        a.p([0, -0.63976, -20.07], [0, 0, 0], [2, 2, 19.84], 1, 0, 0, 0.6);
        a.p([0, -0.6396999999999999, -20.07], [0, 0, 0], [2, 2, 19.84], 1, 0, 0, 0.6);
        a.p([39.53, 1.64, -133.6], [-3.14, -0.64, 0], [8.52, 0.3, 8.52], 1, 0, 0, 0.6);
        a.p([52.91, 2.54006, -143.28], [-3.46, 0, 0], [8.52, 0.3, 4.12], 1, 0, 0, 0.6);
        a.p([46.09, 2.54012, -143.28], [-2.83, 0, 0], [8.52, 0.3, 4.12], 1, 0, 0, 0.6);
        a.p([55.03, 2.54018, -155.91], [-1.53, 0, 0], [8.52, 0.3, 4.12], 2.0, 0, 0, 0.6);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -18.29) {
                    speed = default_speed * 1.5;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -47.01) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -49.41) {
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -59.69) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -122.49000000000001) {
                    speed = default_speed * 1.5;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -135.25) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -139.21) {
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -151.97) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [35.14, -4.50988, -100.69], [-4.36, 0, 0], [11.62, 2, 3.92]);
        a.re('P1', [35.14, -4.50982, -83.82], [-4.71, 0, 0], [11.62, 2, 3.92]);
        a.re('P2', [38.2, -4.50976, -109.39], [-5.37, 0, 0], [11.62, 2, 3.92]);
        a.re('P3', [43.32, -1.3597, -101.59], [-4.71, 0, 0], [6.1, 1.44, 2.1]);
        a.re('P4', [43.33, -0.07, -103.04], [-4.71, 0, -0.68], [4.42, 1.44, 2.1]);
        a.re('P5', [43.33, -2.07994, -103.04], [-1.57, 0, -0.68], [4.42, 1.44, 2.1]);
        a.re('P6', [27.25, 2.51012, -45.01], [-5.19, 0, 0], [30.08, 15.82, 1.36]);
        a.re('P7', [39.53, 2.54018, -143.28], [-3.15, 0, 0], [8.52, 0.3, 8.52]);
        a.re('P8', [38.7, -2.31976, -134.3], [-3.27, -0.61, 0.28], [3.3, 3.34, 16.58]);
        a.re('P9', [55.27, 2.5403000000000002, -148.04], [-1.53, 0, 0], [8.52, 0.3, 4.12]);
        a.re('P10', [37.43, -5.26, -122.5], [-3.15, 0, 0], [8.52, 3.34, 16.58]);
        a.re('P11', [18.24, -1.57994, -64.44], [-5.19, 0, 0], [30.08, 1.68, 1.36]);
        a.re('P12', [35.14, -9.239880000000001, -104.44], [-4.71, 0, 0], [21.16, 2, 20.92]);
        a.re('P13', [-0.06, 0.67018, -41.8], [0, 1.56, 0], [2, 1.8, 2.6]);
        a.re('Y0', [26.24, 1.62024, -65.39], [0, 0, 0], [2, 73.12, 2]);
        a.re('Y1', [40.99, 1.6203, -82.63], [0, 0, 0], [2, 73.12, 2]);
        a.re('Y2', [31.39, 1.62, -95.48], [0, 0, 0], [2, 73.12, 2]);
        a.re('Y3', [31.8, 1.62006, -123.95], [0, 0, 0], [2, 73.12, 2]);
        a.re('Y4', [50.53, 1.27012, -147.76], [0, 0, 0], [2, 73.12, 2]);
        a.re('C0', [28.56, -3.13976, -61.38], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [31.92, -3.1397000000000004, -63.18], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [31.51, -3.14, -66.56], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [36.84, 3.19006, -140.9], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [42.67, 3.1901200000000003, -146.14], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [56.52, 3.19018, -143.75], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [38.77, 3.19024, -146.14], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [49.4, 3.1902999999999997, -142.96], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [54.04, 3.19, -147.85], [0, 0, 0], [2, 2, 2]);
        a.re('P14', [0, -0.53994, -30.29], [0, 0, 0], [2, 2, 19.84]);
        a.re('P15', [20.84, -4.50988, -48.3], [-5.19, 0, 0], [30.08, 2, 15.82]);
        a.re('P16', [35.14, -4.50982, -93.8], [-4.71, 0, 0], [11.62, 2, 3.92]);
        a.re('P17', [0, -0.89976, -9.65], [0, 0, 0], [2, 2, 19.84]);
        a.re('P18', [0, -0.8996999999999999, -9.65], [0, 0, 0], [2, 2, 19.84]);
        a.re('P19', [36.01, -4.51, -72.89], [-5.19, 0, 0], [11.3, 2, 10.2]);
        a.re('P20', [30.89, -4.50982, -63.79], [-5.19, 0, 0], [11.62, 2, 3.92]);
        a.re('P21', [0, -0.63976, -20.07], [0, 0, 0], [2, 2, 19.84]);
        a.re('P22', [0, -0.6396999999999999, -20.07], [0, 0, 0], [2, 2, 19.84]);
        a.re('P23', [39.53, 1.64, -133.6], [-3.14, -0.64, 0], [8.52, 0.3, 8.52]);
        a.re('P24', [52.91, 2.54006, -143.28], [-3.46, 0, 0], [8.52, 0.3, 4.12]);
        a.re('P25', [46.09, 2.54012, -143.28], [-2.83, 0, 0], [8.52, 0.3, 4.12]);
        a.re('P26', [55.03, 2.54018, -155.91], [-1.53, 0, 0], [8.52, 0.3, 4.12]);
    },
    physics_update: function() {},
    render_update: function() {}
}
