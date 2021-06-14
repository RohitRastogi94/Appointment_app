import moment from 'moment'

let currentTS = Date.now()
let dayAfterTomorrow  = moment(currentTS).add(2,'days').format('D/M/Y');

export const tabData = [
	{
		value: '0',
		label:'Today'
	},
	{
		value:'1',
		label:'Tomorrow'
    },
    {
        value: '2',
        label: dayAfterTomorrow
    }
]
export const timeSlotsData = [
    {
        time: '11:00 AM',
        available: true
    },
    {
        time: '01:00 PM',
        available: true
    },
    {
        time: '03:00 PM',
        available: true
    },
    {
        time: '05:00 PM',
        available: true
    }
]