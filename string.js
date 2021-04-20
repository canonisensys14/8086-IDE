 analyse(s) {
        let tab = s.split(/\n/);
        let temp;
        let x = []
        // to know if there is an error just test the last element.good 
        for (let index = 0; index < tab.length; index++) {
            const element = tab[index];
            temp = this.execute(element);
            if (!temp.good) break;
            temp.index = index;
            x.push(temp);
        }

        return x;
    }
