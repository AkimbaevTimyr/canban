<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <style>
            header {
                text-align: center;
                margin-bottom: 20px;
            }
            .table {
                width: 100%;
                border: none;
                margin-bottom: 20px;
            }
            .table thead th {
                font-weight: bold;
                text-align: left;
                border: none;
                padding: 10px 15px;
                background: #d8d8d8;
                font-size: 14px;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
            }
            .table tbody td {
                text-align: left;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
                padding: 10px 15px;
                font-size: 14px;
                vertical-align: top;
            }
            .table thead tr th:first-child, .table tbody tr td:first-child {
                border-left: none;
            }
            .table thead tr th:last-child, .table tbody tr td:last-child {
                border-right: none;
            }
            .table tbody tr:nth-child(even){
                background: #f3f3f3;
            }
        </style>
    </head>
    <body class="antialiased">
        <header>
            <h1>Products List</h1>
        </header>
        <table class="table">
            <thead>
                <tr>
                    <th >Products</th>
                    <th >Buying Price</th>
                    <th >Quantity</th>
                    <th >Threshold Value</th>
                    <th >Expiry Date</th>
                    <th >Availability</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <td>
                            {{ $product->name }}
                        </td>
                        <td>
                            {{ $product->buy_price }}
                        </td>
                        <td>
                            {{ $product->quantity }}
                        </td>
                        <td>
                            {{ $product->threshold }}
                        </td>
                        <td>
                            {{ $product->expiry_date }}
                        </td>
                        <td>
                            {{ $product->availability }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </body>
</html>




 