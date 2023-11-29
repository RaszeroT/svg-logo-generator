class Wording {
    render() {
        this.textColor = '';
    }
    setText(textColor, characters) {
        return `<text x="130" y="85" text-anchor="middle" font-size="45" fill="${textColor}">${characters}</text>`;
    }
}

module.exports = Wording
