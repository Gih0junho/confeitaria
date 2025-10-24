    const calendario = document.getElementById('calendario')

    const opcoes = {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        height: 500,
        headerToolbar: {
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            center: 'title',
            width: '500',
            left: ''
        }
    }

    const calendarioJS = new FullCalendar.Calendar(calendario, opcoes)

    // Buscando os compromissos no LS
    let compromissosLS = window.localStorage.getItem('compromissos')
    compromissosLS = JSON.parse(compromissosLS)

    // Muitos compromissos
    // Então vamos precisar de um 'for'

    for (let i=0; i < compromissosLS.length; i++) {

        const compromisso = compromissosLS[i]

        calendarioJS.addEvent({
            title: compromisso['title'],
            start: compromisso['start'],
            end: compromisso['end']
        })
    }

    calendarioJS.render()