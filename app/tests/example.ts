import * as application from 'tns-core-modules/application';

describe('application', function () {
	this.timeout(20000);

	describe('android', function () {

		this.timeout(20000);
		beforeEach(function (done) {
			setTimeout(done, 5000);
		});

		it('startActivity and foregroundActivity should exist', function () {

			if (!application) {
				console.log(`application = ${application}`);
			} else if (!application.android) {
				console.log(`application.android = ${application.android}`);
			} else {
				console.log(`application.android.startAcitivity = ${application.android.startActivity}`);
				console.log(`application.android.foregroundActivity  = ${application.android.foregroundActivity}`);
			}

			expect(application.android.startActivity).to.not.be.undefined;
			expect(application.android.foregroundActivity).to.not.be.undefined;
		});
	});
});
