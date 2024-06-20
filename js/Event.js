export default class Event {
	constructor(content, datum, titel, img, uur, plaats) {
		this._content = content;
		this._datum = datum;
		this._titel = titel;
		this._img = img;
		this._plaats = plaats;
		this._uur = uur;
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

	get uur() {
		return this._uur;
	}

	get plaats() {
		return this._plaats;
	}

	get htmlString() {
		return `<div class="event-1">
		<div class="datum">
		<div class="datum">
			<h2>${this.datum}</h2>
		</div>
		<div class="plaats">
			<p> <i style='font-size:24px' class='fas'>&#xf3c5;</i> ${this.plaats}</p>
		</div>

		<div class="uur">
			<p><i style='font-size:24px' class='far'>&#xf017;</i>${this.uur}</p>
		</div>
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
				<div class="button-event1">
				<ul>
					<li><a href="aboutme.html">Schrijf je in</a></li>
				</ul>
			</div>
            </div>
        </div>`;
	}
}
