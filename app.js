const axios = require('axios');



const main_loop = () => {
    setTimeout(() => {
        //koodi
        let start_time_stamp = new Date();
        axios.get('https://fanuc-robot-http-server.herokuapp.com/')
            .then((res) => {
                const time_stamp = new Date();
                const delta = time_stamp - start_time_stamp;
                const regexp = 'Joint   [1-6]: *(-?.*)'; //'Joint +[0-9]: +(-*[0-9]+\.[0-9]+)';
                let joints = [];
                let matches = res.data.matchAll(regexp);
                let count = 0;
                for (const match of matches) {
                    count++;
                    if (count > 6) break;
                    const value = parseFloat(match[1]);
                    joints.push(value)
                }                
                console.log(start_time_stamp, joints, delta, 'ms');
            });

        main_loop();
    }, 10);
}
main_loop();