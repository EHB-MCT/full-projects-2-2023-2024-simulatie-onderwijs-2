export default class Event {
	constructor(content, datum, titel, img) {
		this._content = content;
		this._datum = datum;
		this._titel = titel;
		this._img = img;
	}

	get content() {
		return this._content;
	}

	get datum() {
		return this._datum;
	}

	get titel() {
		return this._titel;
	}

	get img() {
		return this._img;
	}

	get htmlString() {
		return `<div class="event-1">
            <div class="datum">
                <h2>${this.datum}</h2>
            </div>
            <div class="img-event-1">
                <img src="${this.img}" alt="Event Image" />
            </div>
            <div class="event1-context">
                <div class="titel1-event">
                    <h2>${this.titel}</h2>
                </div>
                <div class="context1-event">
                    <p>${this.content}</p>
                </div>
				<div class="button-1">
				<ul>
					<li><a href="aboutme.html">Schrijf je in</a></li>
				</ul>
			</div>
            </div>
        </div>`;
	}
}
