import Moment from 'moment';

export default {
    parseTimestamp(time, template) {
        return Moment(parseInt(time)*1000).format(template);
    },

    getTotalTime(times) {
        if (!times.length) return;
        let moment = Moment;

        let totalTime= 0;

        times.map(t => {
            totalTime += (parseInt(t.end) - parseInt(t.start));
        });

        return totalTime / 60;
    }

}