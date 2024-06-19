export default class Forum {
	constructor(context, datum, titel, images, comments) {
		this._context = context;
		this._datum = datum;
		this._titel = titel;
		this._images = images;
		this._comments = comments;
	}

	get context() {
		return this._context;
	}

	get datum() {
		return this._datum;
	}

	get titel() {
		return this._titel;
	}

	get images() {
		return this._images;
	}

	get comments() {
		return this._comments;
	}

	get htmlString() {
		return `<div id="posts">
        <div class="post">
            <div class="left-image-user">
                <img src="${this.images}" alt="docent" />
            </div>
            <div class="right-info">
                <h3>${this.titel}</h3>
                <p>${this.context}</p>
                <div class="date-comments">
                    <div class="date">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                ></path>
                            </g>
                        </svg>
                        <p>${this.updated}</p>
                    </div>
                    <div class="comment">${this.comments}</div>
                </div>
            </div>
        </div>
        <div class="addcomment">
            <a href="#"><p>Schrijf een commentaar</p></a>
        </div>
    </div>`;
	}
}
