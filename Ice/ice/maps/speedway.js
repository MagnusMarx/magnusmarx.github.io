var map = {
    title: "Speedway",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([24.27, 13.110000000000001, -65.52]);
        a.c([-29.28, 3.8, -23.28]);
        a.c([23.29, 23.009999999999998, 106.62]);
        a.c([27.65, 13.110000000000001, -63.64]);
        a.c([-33.17, 5.550000000000001, -18.47]);
        a.c([-36.89, 9.05, -10.26]);
        a.c([25.8, 13.110000000000001, -67.99]);
        a.c([26.66, 13.110000000000001, -71.86]);
        a.c([-43.22, 15.3, 18.33]);
        a.c([-45.45, 15.620000000000001, 36.12]);
        a.c([14.07, 23.009999999999998, 113.39]);
        a.c([24.29, 13.110000000000001, -74.68]);
        a.c([3.89, 22.299999999999997, 112.25]);
        a.c([24.29, 13.110000000000001, -79.31]);
        a.c([-39.43, 17.74, 49.55]);
        a.c([29.76, 20.869999999999997, 89.5]);
        a.p([0.35, -0.86, -1.97], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.34, 0.13, -6.69], [0, 0.49, 0], [2.82, 0.48, 4.58]);
        a.p([0.56, 2.45, -10.98], [0, 0.49, -0.03], [2.82, 0.46, 5.44]);
        a.p([24.73, 19.47, -39.95], [0, 0, -0.71], [2.82, 0.48, 11.04]);
        a.p([0.64, 3.52, -25.94], [0.21, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-1.1, 3.52, -30.58], [0.52, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-4.2, 3.53, -34.25], [0.9, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-8.24, 3.52, -36.32], [1.31, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-17.52, 3.52, -37.62], [1.83, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-13.02, 3.52, -37.56], [1.31, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-21.96, 3.52, -35.75], [2.05, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.72, 3.64, -15.89], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-25.64, 3.52, -32.9], [2.39, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-27.78, 3.52, -28.85], [2.89, 0, 0], [2.82, 0.48, 5.16]);
        a.p([29.65, 15.57, 40.04], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([-32.05, 4.21, -19.01], [-0.5, -0.41, 0.05], [2.82, 0.48, 5.16]);
        a.p([-34.33, 6.13, -15.09], [-0.5, -0.41, 0.05], [2.82, 0.48, 5.16]);
        a.p([-36.4, 7.93, -11.49], [-0.5, -0.41, 0.05], [2.82, 0.48, 5.16]);
        a.p([-38.81, 10.03, -7.39], [-0.5, -0.41, 0.05], [2.82, 0.48, 5.16]);
        a.p([-43.26, 12.28, 0.47], [-0.56, -0.33, -0.52], [2.82, 0.48, 16]);
        a.p([-44.12, 12.62, 10.21], [-0.47, 0, 0], [5.42, 0.48, 10.38]);
        a.p([-43.8, 14.22, 17.95], [-0.27, -0.4, 0.5], [2.82, 0.48, 8]);
        a.p([-46.56, 14.87, 24.91], [-0.47, 0, 0], [2.82, 0.48, 8]);
        a.p([-46.56, 14.87, 25.53], [1.2, -0.01, -0.05], [2.82, 0.48, 0]);
        a.p([-47.42, 14.87, 31.55], [0.17, 0, 0], [2.82, 0.48, 8]);
        a.p([-45.45, 14.87, 38.78], [0.38, 0, 0], [2.82, 0.48, 8]);
        a.p([-40.27, 17.11, 49.56], [0.36, -0.35, -0.14], [3.3, 0.58, 16.28]);
        a.p([29.41, 18.08, 46.56], [0, -0.5, 0], [4.86, 0.48, 10.14]);
        a.p([-23.42, 22.53, 90.88], [0.28, 0, 0], [2.82, 0.48, 13.46]);
        a.p([-16.91, 22.53, 101.27], [0.82, 0, 0], [2.82, 0.48, 13.46]);
        a.p([-7.32, 22.32, 108.99], [1.14, -0.01, -0.57], [2.82, 0.48, 13.46]);
        a.p([4.89, 22.32, 113.12], [1.41, -0.01, -0.57], [2.82, 0.48, 13.46]);
        a.p([16.34, 22.32, 111.88], [2.02, -0.08, -0.6], [2.82, 0.48, 13.46]);
        a.p([25.4, 22.32, 102.86], [2.48, -0.08, -0.6], [2.82, 0.48, 13.46]);
        a.p([29.72, 20.48, 86.67], [-0.2, 0, 0], [3.1, 0.48, 19.86]);
        a.p([33.93, 20.48, 63.84], [-1.56, 0, 0], [26.02, 0.48, 20.48]);
        a.p([27.23, 17.76, 40.19], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([40.81, 18.08, 46.56], [0, -0.5, 0], [4.86, 0.48, 10.14]);
        a.p([31.57, 17.76, 40.19], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([29.56, 20.6, 37.49], [-0.01, -1.58, 0], [4.56, 0.48, 5.16]);
        a.p([33.34, 15.57, -13.37], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([33.16, 18.03, -6.36], [0, -0.5, 0], [4.86, 0.48, 10.14]);
        a.p([40.32, 15.57, -13.37], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([43.03, 17.76, 40.19], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([40.53, 15.57, 40.04], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([38.1, 17.76, 40.19], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([40.6, 20.6, 37.49], [-0.01, -1.58, 0], [4.56, 0.48, 5.16]);
        a.p([40.53, 15.57, 35.05], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([40.61, 18.08, 28.13], [0, 0.52, 0], [4.86, 0.48, 10.14]);
        a.p([40.15, 18.03, -6.36], [0, -0.5, 0], [4.86, 0.48, 10.14]);
        a.p([42.45, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([33.93, 20.43, 10.88], [-1.56, 0, 0], [26.02, 0.48, 20.48]);
        a.p([26.84, 18.03, -6.36], [0, -0.5, 0], [4.86, 0.48, 10.14]);
        a.p([37.6, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([30.95, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([26.86, 15.57, -13.37], [0, 0, 0], [4.56, 0.48, 5.16]);
        a.p([35.61, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([33.26, 20.33, -16.22], [-0.01, -1.58, 0], [5.34, 0.48, 5.16]);
        a.p([24.31, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([29.38, 17.91, -13.4], [-1.58, -1.58, 0], [5.04, 0.48, 5.16]);
        a.p([39.95, 20.33, -16.22], [-0.01, -1.58, 0], [5.34, 0.48, 5.16]);
        a.p([26.94, 15.79, -45.9], [0, 0, 0.72], [2.68, 0.46, 15.38]);
        a.p([25.72, 12.14, -68.04], [0, 0, 0], [5.62, 0.48, 29.9]);
        a.p([22.08, 12.14, -82.13], [0.47, 0, 0], [2.82, 0.48, 5.16]);
        a.p([26.84, 20.33, -16.22], [-0.01, -1.58, 0], [5.34, 0.48, 5.16]);
        a.p([0.76, 3.64, -20.75], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([26.61, 19.35, -29.7], [0, 0, 0], [2.82, 0.48, 9.88]);
        a.p([27.03, 17.13, -20.4], [0, 0.52, 0], [4.86, 0.48, 10.14]);
        a.p([-29.86, 3.52, -23.5], [-0.44, 0, 0], [3.02, 0.48, 7]);
        a.y([-35.1, 19.61, 61.53], [0.35, 1.45, 0], [2.46, 10.72, 2.46]);
        a.y([-31.81, 20.71, 71.46], [0.25, 1.45, 0], [2.34, 10.38, 2.34]);
        a.y([-27.9, 21.84, 80.69], [0.57, 1.45, 0], [2.34, 10.38, 2.34]);
        a.e([21.3, 12.5, -83.81]);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -53.769999999999996) {
                    speed = default_speed * 0.5;
                    steer = default_steer * -0.5;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -91.11) {
                    speed = default_speed;
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
    },
    physics_update: function() {},
    render_update: function() {}
}
