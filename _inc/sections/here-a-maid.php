<div class="<?php echo $klass; ?>">
    <div class="container">
        <div class="here-a-maid-area">
            <div class="text-center">
                <h2 class="hire-a-maid-title">HIRE A MAID</h2>
            </div>
            <form action="#" base-url="form.html" class="here-a-maid-from" id="on-demand-form" method="get">
                <div class="title-wraper clearfix">
                    <div class="demand-title">
                        <h3>Hour(s)</h3>
                    </div>
                    <div class="demand-title">
                        <h3>Minute(s)</h3>
                    </div>
                </div>
                <div class="inline-inputs clearfix">
                    <div class="form-group">
                        <select name="#" class="form-control curencyConvert">
                            <option selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="#" class="form-control curencyConvert">
                            <option selected>Select</option>
                            <option value="0">0</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <div class="result mb-3">
                    <h3 class="result-title">Estimeted Bill</h3>
                    <p class="result-minutes"></p>
                    <p class="result-cash" per-minute="1.67" service-charge="50"></p>
                </div>
                <div class="text-center">
                    <input type="submit" id="on-demand" class="btn btn-primary" value="CONTINUE">
                </div>
            </form>
        </div>
    </div><!-- .container END -->
</div>