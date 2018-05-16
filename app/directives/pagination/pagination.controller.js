export default function($stateParams) {
    this.currentPage = $stateParams.page;

    this.getPaginationList = function() {
        let start = this.currentPage - 3;
        let end = +this.currentPage + 3;
        const resultArr = [];
        const firstPage = 1;

        // fill the resultArr accoring to the start and end points
        while (start < firstPage) {
            start++;
            end++;
        }
        if (end > this.lastResultsPage) {
            end = this.lastResultsPage;
        }
        for (let i = start; i <= end; i++) {
            resultArr.push(i);
        }
        // add last pages to the resultArr
        if (this.lastResultsPage - end <= 3) {
            for (let i = end + 1; i <= this.lastResultsPage; i++) {
                resultArr.push(i);
            }
        } else {
            resultArr.push(
                "...",
                this.lastResultsPage - 1,
                this.lastResultsPage
            );
        }
        // add first pages to the resultArr
        if (this.currentPage <= 7) {
            for (let i = resultArr[0] - 1; i > 0; i--) {
                resultArr.unshift(i);
            }
        } else {
            resultArr.unshift(1, 2, "...");
        }

        return resultArr;
    };
}
