const axios = require ('axios');

axios.get('_osoite_robotin_serveriin_')
    .then((res) => {
        console.log(res);
    });

const regexp = 'regexpkomentotahan';
    let joints = [];
    let matches = res.data.matchAll(regexp);
    let count = 0;
    for  (const match of matches) {
        count++;
        if (count > 6) break;
        const value = parseFloat(match[1]);
        joints.push(value)
    }

    const main_loop = () => {
        setTimeout(()=> {
            //koodi
            const time_stamp = new Date();
            const delta = time_stamp - start_time_stamp;
            main_loop();
        },10);
    }
    main_loop();