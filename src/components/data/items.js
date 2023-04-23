export const xburgerIngredients = [
	{ key: '01_bread-top', visibility: true, width: 382, height: 202 },
	{ key: '02_onions', visibility: true, width: 323, height: 124 },
	{ key: '03_salad', visibility: true, width: 349, height: 232 },
	{ key: '04_pickles', visibility: true, width: 396, height: 167 },
	{ key: '05_pomodoro', visibility: false, width: 398, height: 138 },
	{ key: '06_cheese', visibility: true, width: 422, height: 298 },
	{ key: '07_beef', visibility: true, width: 393, height: 193 },
	{ key: '08_bacon', visibility: false, width: 341, height: 196 },
	{ key: '09_bread-bottom', visibility: true, width: 399, height: 268 },
];


export const burgerIngredients = [
	{ category: 'Булочка', type: 'radio', options: [
        {
            id: '01_bread-sesame-top',
            value: 'С кунжутом',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: 'С кунжутом ...'},
            visual: { width: 382, height: 202, bottom:
                    {
                        id: '09_bread-sesame-bottom',
                        visual: { width: 371, height: 204 }
                    },
                }
        },
        {
            id: '01_bread-siberia-top',
            value: 'Сибирская',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: 'С кунжутом ...'},
            visual: { width: 382, height: 202, bottom:
                    {
                        id: '09_bread-siberia-bottom',
                        visual: { width: 371, height: 204}
                    },
                }
        },
    ]
    },
        { category: 'Котлета', type: 'radio', options: [
        {
            id: '07_beef',
            value:'Говядина',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 383, height: 160, bottom: null }
        },
        {
            id: '07_chicken',
            value:'Курица',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 383, height: 160, bottom: null }
        },
        ]
    },
    { category: 'Овощи', type: 'checkbox', options: [
        {
            id: '02_onions',
            value: 'Лук',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 323, height: 124, bottom: null }
        },
        {
            id: '03_salad',
            value: 'Салат',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 349, height: 232, bottom: null }
        },
        {
            id: '04_pickles',
            value: 'Соленые огурцы',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 396, height: 167, bottom: null }
        },
        {
            id: '05_pomodoro',
            value: 'Помидоры',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 398, height: 138, bottom: null }
        },
        ]
    },

    { category: 'Сыр', type: 'checkbox', options: [
        {
            id: '06_cheese',
            value:'Чеддер',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 422, height: 298, bottom: null }
        },
        {
            id: '06_mozarella',
            value:'Моцарелла',
            added : true,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 389, height: 152, bottom: null }
        },
        ]
    },

    { category: 'Добавки', type: 'checkbox', options: [
        {
            id: '08_bacon',
            value: 'Бекон',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 341, height: 196, bottom: null }
        },
        {
            id: '08_ananas',
            value: 'Ананас',
            added : false,
            info: { weight: 120, cost: 100, calories: 200, protein: 20, carbs: 70, fat: 80, about: ' ...'},
            visual: { width: 365, height: 154, bottom: null }
        },
        ]
    },
];
