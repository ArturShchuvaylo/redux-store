export default class PhonesStoreService {
    data = [
        {
            id: 1,
            title: 'Nokia',
            discription: 'Best phone for people...',
            total: 2000,
            imagUrl: 'https://itc.ua/wp-content/uploads/2022/07/Nokia-8210-4G.jpg'
        },
        {
            id: 2,
            title: 'IPhone',
            discription: 'Best phone for people...',
            total: 20000,
            imagUrl: 'https://mcstore.com.ua/image/cache/catalog/MPVA3-1663407386-600x600.jpg'
        },

    ];
    getPhones() {
        return new Promise((resolve, reject) => {


            setTimeout(() => {
                if (Math.random() > 0.85) {
                    reject(new Error("Something has gone wrong!!!"));
                }
                else {
                    resolve(this.data)
                }

            }, 700)
        })
    }
}